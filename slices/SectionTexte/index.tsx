import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type SectionTexteProps = SliceComponentProps<Content.SectionTexteSlice>;

const SectionTexte: FC<SectionTexteProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="px-6 py-8 flex flex-col gap-2"
    >
      <h2 className="text-accent font-bold">{slice.primary.titre}</h2>
      <PrismicRichText field={slice.primary.contenu} />
    </section>
  );
};

export default SectionTexte;
