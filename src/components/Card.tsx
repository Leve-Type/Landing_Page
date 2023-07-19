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
      <section className="w-1/2 relative bg-slate-300 rounded-xl shadow-2xl">
        <img className="absolute right-0 bottom-0 rounded-xl w-96" src={props.image} alt="" />
      </section>
    );
  }

  // Renderizar o componente de texto
  return (
    <section className="w-1/2 bg-slate-300 rounded-xl p-6 shadow-2xl">
      <h2 className="font-bold text-4xl text-center px-10 m-5">{props.title}</h2>
      <h3 className="font-bold text-2xl text-center">{props.subtitle}</h3>
      <p className="font-medium mt-5 leading-8">{props.paragraph}</p>
    </section>
  );
};
