import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const projectText = `
In art we should find the most direct expression of the present.

Today its become evermore difficult to exist in this present moment, without deep a sense of sorrow. We are mourning the loss of beautiful things, of dreams and the hopes on which our imagination was grounded. We are heart broken by future prospects unable to truly celebrate what should be a joyous moment.

The idea of the garden is the theme I wished to explore, not just as a space of refuge but as a conceptual space from which consciousness emerges. The secret source of our imagination.

In our anthropocentric way we have narrated of a paradise from which we have been expelled, but here I wish to return to a garden as a place of healing, to listen to what nature might tell of the human condition.

The garden in this context is an imaginary enclosure that enables us to go back to a time before human thought. To a time before the emergence of any culture. To the roots before the formation of our identities to listen to the lessons of what nature might teach. To trust plant intelligence since we cannot trust our own. A return to an archaic form of consciousness in which all nature was animated by spirits.

The presence of an olive tree will be the base to allow us to learn from it; and from this lesson imagine new grounds, new forms and narratives for how to navigate the future.

The tree, as a symbol of unity in Abrahamic faiths, is here as a voice to ask if we can return to a spirituality with principles of unity by putting aside the narratives which are separating us.

This will not be a spectacle or a form of expression to be made visible but rather a gesture that contains the capacity to resonate with each and every one of us. We are invited to see reality as a direct experience. I will be absent.

The work is a song in a minor key.
`;

const projectParagraphs = projectText.trim().split(/\n\s*\n/);

const GardenOfTheBrokenHearted = () => {
    const GARDEN_2_SRC = `${process.env.PUBLIC_URL}/Garden2.jpg`;
    const GARDEN_3_SRC = `${process.env.PUBLIC_URL}/Garden3.jpg`;
    const GARDEN_4_SRC = `${process.env.PUBLIC_URL}/Garden4.jpg`;

    return (
        <main className="min-h-screen overflow-hidden bg-[#070805] text-[#fff7c9]">
            <section className="relative isolate px-4 py-8 sm:px-8 sm:py-10 md:px-16 lg:px-24 2xl:px-32">
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_12%,rgba(255,247,201,0.12),transparent_30%),radial-gradient(circle_at_86%_18%,rgba(95,115,58,0.24),transparent_34%),linear-gradient(135deg,#050603_0%,#111709_52%,#050603_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 -z-10 h-48 bg-gradient-to-b from-transparent to-[#070805]" />

                <div className="mx-auto max-w-7xl">
                    <div className="flex items-center justify-between gap-6 text-[#fff7c9]/75">
                        <Link
                            to="/"
                            aria-label="Back to home"
                            className="group flex h-8 w-8 items-center justify-center transition hover:text-[#fff7c9]"
                        >
                            <span className="relative block h-px w-5 bg-current transition group-hover:w-6">
                                <span className="absolute left-0 top-0 h-px w-2 origin-left -rotate-45 bg-current" />
                                <span className="absolute left-0 top-0 h-px w-2 origin-left rotate-45 bg-current" />
                            </span>
                        </Link>
                    </div>

                    <div className="pt-12 lg:pt-16">
                        <h1 className="theo-title mx-auto max-w-6xl text-center text-4xl uppercase leading-[0.95] tracking-[-0.04em] text-[#fff7c9] sm:text-5xl md:text-6xl lg:text-6xl">
                            The Garden of the Broken-Hearted
                        </h1>

                        <div className="relative mx-auto mt-10 min-h-[340px] max-w-5xl sm:mt-12 sm:min-h-[500px] lg:min-h-[600px]">
                            <figure className="absolute left-0 top-0 w-[68%] shadow-2xl shadow-black/55">
                                <img
                                    src={GARDEN_2_SRC}
                                    alt="Garden installation view with foliage and light"
                                    className="h-auto w-full"
                                    decoding="async"
                                    fetchPriority="high"
                                />
                            </figure>

                            <figure className="absolute right-0 top-20 w-[27%] shadow-2xl shadow-black/60 sm:top-28">
                                <img
                                    src={GARDEN_3_SRC}
                                    alt="Tall garden detail from The Garden of the Broken-Hearted"
                                    className="h-auto w-full"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-20 sm:px-8 md:px-16 lg:px-24 2xl:px-32">
                <article className="mx-auto max-w-4xl border-t border-[#fff7c9]/15 pt-12 text- text-[1.05rem] leading-relaxed text-[#fff7c9]/86 sm:text-lg lg:pt-16">
                    <div className="flow-root space-y-6">
                        {projectParagraphs.map((paragraph, index) => {
                            const isFinalParagraph = index === projectParagraphs.length - 1;

                            return (
                                <Fragment key={paragraph}>
                                    {isFinalParagraph && (
                                        <figure className="mb-8 w-full shadow-2xl shadow-black/55 sm:float-right sm:mb-4 sm:ml-8 sm:w-[34%]">
                                            <img
                                                src={GARDEN_4_SRC}
                                                alt="Square garden composition from The Garden of the Broken-Hearted"
                                                className="h-auto w-full"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </figure>
                                    )}
                                    <p>{paragraph}</p>
                                </Fragment>
                            );
                        })}
                    </div>
                </article>
            </section>
        </main>
    );
};

export default GardenOfTheBrokenHearted;
