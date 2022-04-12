import { useState, useEffect } from "react";
import axios from "axios";

import { Wrapper, Container, Company, CreateCompany, Spinner } from "./styles";

import { ImArrowRight2 } from "react-icons/im";
import Form from "../Form";
import { useUser } from "@/components/Global/Providers/user";
import Link from "next/link";
import { toast } from "react-toastify";

const Companies: React.FC = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { currentUser } = useUser();

  useEffect(() => {
    setLoading(true);
    async function loadCompanies() {
      try {
        const { data } = await axios.post("/api/company/list", {
          email: currentUser.email,
        });

        setCompanies(data);
      } catch (err) {
        toast("Não foi possível encontrar empresas!", {
          progressClassName: "progress-error",
          className: "toaster-error",
        });
      } finally {
        setLoading(false);
      }
    }

    loadCompanies();
  }, []);

  return (
    <Wrapper>
      <h1>Minhas empresas</h1>
      {!loading && (
        <Container>
          {companies.map((company: any) => (
            <Link
              key={company.id}
              href={{
                pathname: `/company/${company.slug}`,
                query: { id: company.id },
              }}
              passHref
            >
              <Company>
                <p>{company.name}</p>
                <ImArrowRight2 size={20} />
              </Company>
            </Link>
          ))}
          <CreateCompany onClick={() => setFormOpen(true)}>
            Criar empresa
          </CreateCompany>
          {formOpen && <Form setOpen={setFormOpen} />}
        </Container>
      )}

      {loading && <Spinner />}
    </Wrapper>
  );
};

export default Companies;
