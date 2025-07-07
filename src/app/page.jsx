// Para usar coisas de cliente  
'use client'
import { Button } from "@/components/ui/button";

export default function Home() {
  function Navigate(nomePagina){
      return window.location.href=nomePagina
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-24">
        <h1 className="m-20">
            Seja bem-vindo ao Trabalho de Versionamento de Software!
            <br />
        </h1>

        <div className="flex flex-col items-center justify-center gap-7">
            <div className="flex flex-wrap items-center justify-center gap-7">
                <Button 
                  className={"transition hover:-translate-y-0.5"}
                  onClick={() => Navigate("sobre-nos")}>
                  Página Sobre-nós
                </Button>

                <Button
                  className={"transition hover:-translate-y-0.5"}
                  onClick={() => Navigate("clientes")}>
                  Página de Clientes
                </Button>

                <Button 
                  className={"transition hover:-translate-y-0.5"}
                  onClick={() => Navigate("eventos")}>
                  Página de Eventos
                </Button>

                <Button 
                  className={"transition hover:-translate-y-0.5"}
                  onClick={() => Navigate("produtos")}>
                  Página de Produtos
                </Button>

                <Button 
                  className={"transition hover:-translate-y-0.5"}
                  onClick={() => Navigate("contato")}>
                  Página de Contato
                </Button>
            </div>
            <h2>Aqui você poderá ser levado a qualquer página rapidamente!</h2>
        </div>
      </main>
    </>
  );
}