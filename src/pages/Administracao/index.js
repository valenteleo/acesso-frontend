import { useState, useEffect } from "react";
import {
  Container,
  Input,
  FormField,
  SelectDpo,
  Button,
} from "./administracao";

export default function Adm() {
  const [company, setCompany] = useState("");
  const [collaborator, setCollaborator] = useState("");
  const [rgCpf, setRgCpf] = useState("");
  const [dpo, setDpo] = useState("");
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("00:00:00");
  const [visitor, setVisitor] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setHour(new Date().toLocaleTimeString());
    }, 1000);
  }, [hour]);

  const handleDpo = (e) => {
    setDpo(e.target.value);
  };

  const handleFile = (e) => {
    let image = e.target.files[0];

    if (image.type === "image/jpeg" || image.type === "image/png") {
      setVisitor(URL.createObjectURL(image));
    } else {
      alert("Apenas imagem do tipo JPG ou PNG.");
      setVisitor(null);
    }
  };

  const handleRequest = () => {};

  return (
    <Container>
      <FormField>
        <Input
          id="empresa"
          type="text"
          placeholder="Empresa"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Nome"
          value={collaborator}
          onChange={(e) => setCollaborator(e.target.value)}
        />
        <Input
          type="text"
          placeholder="RG/CPF"
          value={rgCpf}
          onChange={(e) => setRgCpf(e.target.value)}
        />
        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input value={hour} />

        <SelectDpo onChange={(e) => handleDpo(e)}>
          <option value="MAAD">MAAD</option>
          <option value="MATI">MATI</option>
          <option value="MAPD">MAPD</option>
        </SelectDpo>

        <Input type="file" accept="image/*" onChange={(e) => handleFile(e)} />
        <Button onClick={handleRequest}>Solicitar</Button>
      </FormField>
    </Container>
  );
}
