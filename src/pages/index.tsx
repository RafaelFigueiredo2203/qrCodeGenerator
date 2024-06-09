import QRCodeGenerator from "@/components/qrcode-generator";

export default function Home() {

  return (
    <div>
      <QRCodeGenerator/>

      <footer className="w-full flex flex-col items-center justify-center mb-5">
        <img src="https://github.com/RafaelFigueiredo2203.png" className="w-32 h-32 rounded-full"/>

        <h3
        className="text-lg text-gray-300 text-center mt-2"
        >Olá , sou o Rafa Figueiredo , desenvolvi essa ferramente grátis e simples <br/> para geração de QrCodes grátis , muito obrigado por utilizar! </h3>
        
        <h4  className="text-lg text-gray-100 text-center mt-2" >Considere fazer uma doação , chave pix: 14996112228</h4>

        <h5 className="text-lg text-gray-100 text-center mt-2">
        <a className="hover:text-green-500" target="_blank" href="https://github.com/RafaelFigueiredo2203">
        Acesse meu{' '} 
        GitHub</a></h5>
      </footer>
    </div>
  );
}
