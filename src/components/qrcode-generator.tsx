import { Box, Button } from '@ignite-ui/react';
import download from 'downloadjs';
import { toJpeg, toPng } from 'html-to-image';
import QRCode from 'qrcode.react';
import React, { useRef, useState } from 'react';
import { ChromePicker } from 'react-color';


const QRCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');
  const [qrCodeColor, setQrCodeColor] = useState('#FBFBFB'); // Default color is black
  const [qrCodeSize, setQrCodeSize] = useState(30); // Default size
  const [qrCodeBorder, setQrCodeBorder] = useState(0); // Default border
  const qrCodeRef = useRef<HTMLDivElement>(null);

  const handleGenerateClick = () => {
    setQrCodeValue(inputValue);
  };

  const handleColorChange = (color: any) => {
    setQrCodeColor(color.hex);
  };


  async function handleDownload(format: 'png' | 'jpeg'){
    if (qrCodeRef.current === null) {
      return console.log('null');
    }

    const exportFn = format === 'png' ? toPng : toJpeg;

    await exportFn(qrCodeRef.current)
      .then((dataUrl: string) => {
        download(dataUrl, `qr-code.${format}`);
        console.log('deu bom')
      })
      .catch((err: Error) => {
        console.error('Failed to export image', err);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-10 mt-[-90px] ">Gerador de QR Code</h1>

      <div className='flex flex-row items-center justify-around w-full'>
      <Box>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Digite o texto ou URL"
        className="mb-4 p-2   rounded text-gray-200 focus:outline-green-600 focus:border-0 placeholder:text-gray-400 bg-gray-800"
      />

      <ChromePicker color={qrCodeColor} onChangeComplete={handleColorChange} />
      <div className="mb-4 flex flex-col items-center">
        <label className="mb-2">Tamanho do QR Code</label>
        <input
          type="range"
          min="128"
          max="512"
          value={qrCodeSize}
          onChange={(e) => setQrCodeSize(Number(e.target.value))}
          className="w-full max-w-md"
        />
      </div>
      <div className="mb-4 flex flex-col items-center">
        <label className="mb-2">Espessura da Borda</label>
        <input
          type="range"
          min="0"
          max="20"
          value={qrCodeBorder}
          onChange={(e) => setQrCodeBorder(Number(e.target.value))}
          className="w-full max-w-md"
        />
      </div>
      <Button
        onClick={handleGenerateClick}  
      >
        Gerar QR Code
      </Button>
      </Box>

      <div className='flex flex-col items-center justify-center h-[530px]'>
      {qrCodeValue && (
        <div className="" style={{ border: `${qrCodeBorder}px solid ${qrCodeColor}` }} ref={qrCodeRef}>
          <QRCode value={qrCodeValue} bgColor={qrCodeColor} size={qrCodeSize} />
        </div>
      )}
          {qrCodeValue && (
        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => handleDownload('png')}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Exportar como PNG
          </button>
          <button
            onClick={() => handleDownload('jpeg')}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Exportar como JPEG
          </button>
        </div>
      )}
      </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
