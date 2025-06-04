// "use client";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// export default function ExportPDF() {
//   const generatePDF = async () => {
//     const element = document.body;
//     const canvas = await html2canvas(element);
//     const imgData = canvas.toDataURL("image/png");

//     const pdf = new jsPDF("p", "mm", "a4");
//     pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
//     pdf.save("CV_Thibault_Guilhem.pdf");
//   };

//   return (
//     <button
//       onClick={generatePDF}
//       className="bg-blue-600 text-white px-4 py-2 rounded"
//     >
//       Télécharger en PDF
//     </button>
//   );
// }
