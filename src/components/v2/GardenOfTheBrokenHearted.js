import React from "react";
import { Link } from "react-router-dom";

const GardenOfTheBrokenHearted = () => {
    const BROKEN_2_SRC = `${process.env.PUBLIC_URL}/broken-2.png`;

    return (
        <div className="min-h-screen bg-black text-[#fff7c9]">
            <div className="w-full lg:px-72 2xl:px-32 md:px-16 sm:px-8 px-4 py-10">
                <div className="flex items-center justify-between gap-6">
                    <Link to="/" className="uppercase text-xs opacity-80 hover:opacity-100">
                        Back
                    </Link>
                    <span className="uppercase text-xs opacity-70">Venice Biennale</span>
                </div>

                <div className="pt-10 lg:flex lg:items-start lg:justify-between lg:gap-10">
                    <div className="lg:flex-1">
                        <h1 className="theo-title uppercase text-xl">
                            The Garden of the Broken-Hearted
                        </h1>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            In art we should find the most direct expression of the present.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            Today its become evermore difficult to exist in this present moment, without deep a
                            sense of sorrow. We are mourning the loss of beautiful things, of dreams and the
                            hopes on which our imagination was grounded. We are heart broken by future
                            prospects unable to truly celebrate what should be a joyous moment.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            The idea of the garden is the theme I wished to explore, not just as a space of
                            refuge but as a conceptual space from which consciousness emerges. The secret
                            source of our imagination.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            In our anthropocentric way we have narrated of a paradise from which we have
                            been expelled, but here I wish to return to a garden as a place of healing, to listen
                            to what nature might tell of the human condition.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            The garden in this context is an imaginary enclosure that enables us to go back to a
                            time before human thought. To a time before the emergence of any culture. To the
                            roots before the formation of our identities to listen to the lessons of what nature
                            might teach. To trust plant intelligence since we cannot trust our own. A return to an
                            archaic form of consciousness in which all nature was animated by spirits.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            The presence of an olive tree will be the base to allow us to learn from it; and from
                            this lesson imagine new grounds, new forms and narratives for how to navigate the
                            future.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            The tree, as a symbol of unity in Abrahamic faiths, is here as a voice to ask if we
                            can return to a spirituality with principles of unity by putting aside the narratives
                            which are separating us.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            This will not be a spectacle or a form of expression to be made visible but rather a
                            gesture that contains the capacity to resonate with each and every one of us. We
                            are invited to see reality as a direct experience. I will be absent.
                        </p>
                        <p className="pt-6 max-w-3xl text-base text-md leading-relaxed text-[#fff7c9] opacity-90">
                            The work is a song in a minor key.
                        </p>
                    </div>

                    <div className="pt-10 lg:pt-2 lg:w-96 lg:shrink-0">
                        <img
                            src={BROKEN_2_SRC}
                            alt="The Garden of the Broken-Hearted"
                            className="w-full h-auto"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GardenOfTheBrokenHearted;
