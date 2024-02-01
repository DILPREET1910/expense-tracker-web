export default function SharedData({
  params,
}: {
  params: { public_key: string };
}) {
  return <p>{params.public_key}</p>;
}
