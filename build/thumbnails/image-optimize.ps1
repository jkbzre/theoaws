# ImageMagick batch optimization script for Windows PowerShell
# 1. Convert all .jpg/.png to WebP (quality 80)
# 2. Create low-res blurred base64 placeholders
# 3. Create responsive sizes (400px, 800px, 1200px)
#
# Place this script in your image folder and run with PowerShell

$ErrorActionPreference = 'Continue'

Write-Host "Starting image optimization..." -ForegroundColor Green

# 1. Convert to WebP
Write-Host "`n1. Converting images to WebP format..." -ForegroundColor Yellow
Get-ChildItem -Include *.jpg,*.jpeg,*.png -File | ForEach-Object {
    $webp = $_.FullName -replace '\.(jpg|jpeg|png)$', '.webp'
    Write-Host "  Converting $($_.Name) -> $([System.IO.Path]::GetFileName($webp))"
    magick $_.FullName -quality 80 $webp
}

# 2. Create low-res blurred base64 placeholders
Write-Host "`n2. Creating blur placeholders..." -ForegroundColor Yellow
Get-ChildItem -Include *.jpg,*.jpeg,*.png -File | ForEach-Object {
    $tempFile = "$($_.FullName).temp.jpg"
    $base64Path = $_.FullName + '.base64.txt'
    Write-Host "  Creating placeholder for $($_.Name)"
    
    # Create temp blurred file
    magick $_.FullName -resize 20x20 -blur 0x8 -quality 50 $tempFile
    
    # Convert to base64
    $bytes = [System.IO.File]::ReadAllBytes($tempFile)
    $base64 = [Convert]::ToBase64String($bytes)
    "data:image/jpeg;base64,$base64" | Out-File -FilePath $base64Path -Encoding utf8
    
    # Clean up temp file
    Remove-Item $tempFile
}

# 3. Create responsive sizes
Write-Host "`n3. Creating responsive image sizes..." -ForegroundColor Yellow
$sizes = @(400, 800, 1200)
Get-ChildItem -Include *.jpg,*.jpeg,*.png -File | ForEach-Object {
    foreach ($size in $sizes) {
        $ext = $_.Extension
        $out = $_.FullName -replace '\.(jpg|jpeg|png)$', ".$size$ext"
        Write-Host "  Creating ${size}px version of $($_.Name)"
        magick $_.FullName -resize ${size}x $out
    }
}

Write-Host "`nImage optimization complete!" -ForegroundColor Green
Write-Host "Generated:" -ForegroundColor Cyan
Write-Host "  - WebP versions (.webp)" -ForegroundColor Cyan
Write-Host "  - Blur placeholders (.base64.txt)" -ForegroundColor Cyan
Write-Host "  - Responsive sizes (.400, .800, .1200)" -ForegroundColor Cyan
