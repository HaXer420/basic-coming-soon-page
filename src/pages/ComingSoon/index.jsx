import React , {useState} from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Input, Heading } from "../../components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
   
  const handleSubscribe = () => {
    const validEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(email === ""){
      toast.error("Please enter your email");
      return;
    } 
    else if (!validEmail.test(email)) {
      toast.error("Please enter a valid email");
      return;
    } 
    const baseUrl = 'https://app-rec1.kavanhealth.com/user/upcoming/'
    const data = {
      email: email
    }
    fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 200){
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    })

  }
  return (
    <>
      <Helmet>
        <title>coming soon</title>
        <meta name="description" content="Script ID" />
      </Helmet>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .spin {
          animation: spin 10s linear infinite;
        }
        @media (max-width: 1380px) {
          .logo-image {
            width: 150px;
          }
          .heading-container {
            font-size: 40px;
          }
          .title-container {
            font-size: 20px;
          }
          .button-container {
            width: 80%;
          }
          .logo-buttons {
            width: 100%;
          }
          .button-style {
            min-width: 30px;
          }
    
        }

        @media (min-width: 600px) {
          .video-container {
            display: block; 
          }
          .image-container {
            display: none; 
          }
        }
      `}</style>
        
      <div className="h-screen w-full bg-white-A700 relative overflow-hidden">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
            <source src="images/v1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="image-container">
          <img src="images/img_frame_1686554795.png" alt="mobile_image" className="absolute z-0 w-auto min-w-full min-h-full max-w-none" />
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full absolute inset-0 mx-auto mt-4">
          <Img src="images/img_image_131.png" alt="image131_one" className="w-1/5 md:w-1/4 lg:w-1/4 object-cover logo-image" />
          <div className="flex flex-col self-stretch items-center mt-24 gap-2">
            <Heading as="h1" className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl heading-container">
              Coming Soon
            </Heading>
            <Text size="s" as="p" className="w-11/12 md:w-10/12 text-center text-xl sm:text-base title-container">
              Mobile application for the delivery of your prescription and over
              the counter health and wellness products.
            </Text>
          </div>
          <div className="flex flex-col w-full mt-10 gap-2.5 px-0 mx-auto max-w-md md:max-w-lg button-container">
            <div className="flex md:flex-col gap-5">
              <Input
                shape="round"
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={(value) => setEmail(value)}
              />
              <Button
                size="sm"
                variant="gradient"
                shape="round"
                color="blue_700_blue_500_01"
                className="sm:px-5 capitalize font-semibold min-w-[163px] button-style"
                style={{
                  background: "linear-gradient(to right, #136FCF 50%, #3096FF 50%)",
                }}
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
            <Text as="p" className="capitalize text-center text-base sm:text-sm">
              Submit your email for updates on launch
            </Text>
          </div>
          <div className="flex justify-center mt-2 gap-4 logo-buttons">
            <a href="https://www.linkedin.com/company/scripid-llc/" target="_blank" rel="noopener noreferrer">
              <Button shape="circle" className="w-10 h-10">
                <Img src="images/img_frame.png" />
              </Button>
            </a>
            {/* <Button shape="circle" className="w-10 h-10">
              <Img src="images/img_frame_40x40.png" />
            </Button> */}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}