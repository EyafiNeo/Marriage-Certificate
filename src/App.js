import './App.css';
import React from "react";
import { useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
function App() {


  const inputRef = useRef(null);
  const printDocument = () => {

    var doc = new jsPDF("l", "mm", "a4");
    html2canvas((inputRef.current), { useCORS: true }).then((canvas) => {
      var imgData = canvas.toDataURL('image/png');
      var pageHeight = 395;
      var imgWidth = (canvas.width * 50) / 210;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;
      var position = 25;

      doc.addImage(imgData, 'PNG', 14, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 14, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      // doc.output('dataurlnewwindow');
      doc.save('Nikah-Nama.pdf');
    });

    // html2canvas((inputRef.current),{useCORS: true}).then((canvas) => {
    //   let img = new Image();
    //   img.src = canvas.toDataURL('image/png');
    //   img.onload = function () {
    //     let pdf = new jsPDF('l', 'mm', 'a4');
    //     pdf.addImage(img, 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);
    //     pdf.save('certificate.pdf');
    //   }
    // });
  };
  return (
    <div className="mt-12">
      <div className="border-red-500 border-dashed certificate border-4  mx-auto p-8 " id='divToPrint' ref={inputRef}>
        <div className=' flex items-center h-full'>
          <div className='w-full h-min'>
            <h1 className='text-center font-semibold text-2xl  '>ডিজিটাল নিকাহ্‌নামা</h1>
            <img className='h-14 w-32 mx-auto love-lock' src="https://i.ibb.co/f8Pg2mn/output-onlinepngtools.png" alt="Lock heart" crossorigin />
            <div className='mt-10'>
              <p className=' text-2xl text-center'>এই মর্মে প্রত্যয়ন করা যাচ্ছে যে,</p>
              <div className='flex flex-row mt-8  '>
                <div className='border-r text-right px-6 border-rose-600   w-1/2'>
                  <p className=' font-semibold'>মোঃ নাসির হোসাইন</p>
                  <div className=' w-full flex justify-end'>
                    <div className='w-max '>
                      <p className='font-semibold'>আল সাজিদুজ্জামান আকন্দ</p>
                      <p className='text-center'>এবং</p>
                      <p><span className='font-semibold'>তামান্না হোসাইন</span> এর পুত্র</p>
                    </div>
                  </div>
                  <p>জন্মঃ <span className='font-semibold'>১ জানুয়ারি, ২০২০</span></p>
                  <p>ঠিকানাঃ বাড়ী - ০৬, মনসুর আলী রোড, গাজীপুর, ঢাকা</p>

                </div>
                <div className='border-l text-left px-6 border-rose-600 w-1/2'>
                  <p className='font-semibold'>তামিমা তাম্মি</p>
                  <div className=' w-full flex justify-start'>
                    <div className='w-max '>
                      <p className='font-semibold'>আল সাজিদুজ্জামান আকন্দ</p>
                      <p className='text-center'>এবং</p>
                      <p><span className='font-semibold'>নাজনীন খাতুন</span> এর কন্যা</p>
                    </div>
                  </div>
                  <p>জন্মঃ <span className='font-semibold'>১ জানুয়ারি, ২০২২</span></p>
                  <p>ঠিকানাঃ বাড়ী - ০৬, রোকেয়া খাতুন রোড, বান্দরবান, চট্টগ্রাম</p>
                </div>
              </div>
              <div className='mt-6'>
                <p className='text-center text-xl'>উভয়ে বিবাহ বন্ধনে আবদ্ধ হয়েছেন</p>
                <p className='text-center text-lg'>তারিখঃ ১ মার্চ, ২০২৩</p>
                <p className='text-center text-lg'>স্থানঃ আশুলিয়া, সাভার, ঢাকা</p>
              </div>
            </div>
          </div>

        </div>
        <div className='bg-img1'>
          <img src="https://i.ibb.co/Y2DWzB1/pngwing-com.png" alt="pngwing-com" border="0" />
        </div>
        <div className='bg-img2'>
          <img src="https://i.ibb.co/VTjZF8q/pngwing-com.png" alt="pngwing-com" border="0" />
        </div>
        <div className="qr-code">
          <img src="https://i.ibb.co/QXRRtsr/pngwing-com.png" alt="pngwing-com" border="0" />
        </div>
      </div>

      <div className='mt-5 flex justify-center'>
        <button onClick={printDocument} className='bg-rose-700 px-5 py-2 text-white rounded'>নিকাহ্‌নামা সংগ্রহ করুন</button>

      </div>

    </div>

  );
}


export default App;
