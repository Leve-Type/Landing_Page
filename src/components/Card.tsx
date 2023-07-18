interface PropsCardImage {
  image: string;
}

interface PropsCardText {
  title: string;
  subtitle: string;
  paragraph: string;
}

export type Props = PropsCardImage | PropsCardText;

export const Card = (props: Props) => {
  if ('image' in props) {
    // Renderizar o componente de imagem
    return (
      <section className="w-[650px] bg-slate-300 rounded m-5">
        <img src={props.image} alt="" />
      </section>
    );
  }

  // Renderizar o componente de texto
  return (
    <section className="w-[650px] bg-slate-300 rounded m-5">
      <h2 className="font-bold text-4xl text-center">{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <p>{props.paragraph}</p>
    </section>
  );
};
