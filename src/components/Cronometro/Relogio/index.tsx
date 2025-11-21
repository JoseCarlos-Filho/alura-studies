import style from "./Relogio.module.scss";

interface Props {
  tempo: number | undefined;
}

export default function Relogio({ tempo = 0 }: Props) {
  const minutos = Math.floor(tempo / 60);
  const segundos = tempo % 60;

  const [minDec, minUni] = String(minutos).padStart(2, "0").split("");
  const [secDec, secUni] = String(segundos).padStart(2, "0").split("");

  return (
    <>
      <span className={style.relogioNumero}>{minDec}</span>
      <span className={style.relogioNumero}>{minUni}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secDec}</span>
      <span className={style.relogioNumero}>{secUni}</span>
    </>
  );
}
