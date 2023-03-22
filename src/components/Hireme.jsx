import { content } from "../Content";
import { React, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from '@mui/material/Button';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  margin: "auto",
  height:'800px',
  bgcolor: "background.paper",
  border: "2px solid #000",
  overflow:"auto",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function ChildModal() {
  const { Hireme } = content;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpen}>Flow Chart</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: "60%", height: "60%" }}>
          <img
            src={Hireme.flow}
            alt="..."
            data-aos="fade-right"
            className="max-w-4xl h-auto md:block hidden"
          />
          <Button onClick={handleClose}>Close Flow Chart</Button>
        </Box>
      </Modal>
    </>
  );
}

const Hireme = () => {
  const { Hireme } = content;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse ">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-l
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button className="btn bg-dark_primary text-white">
              {Hireme.btnText}
            </button>
            <button
              onClick={handleOpen}
              className="btn bg-dark_primary text-white ml-10"
            >
              {Hireme.btn2Text}
            </button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h2 className="title" data-aos="fade-down">
                CICD - Pipeline
              </h2>
              <h4 className="subtitle" data-aos="fade-down">
                Deploying a Static Website to S3 and CloudFront with Github
                Actions for CICD
              </h4>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <ul className="list-decimal px-4 font-Poppins sm:text-sm text-xs !leading-7">
                <li>
                  <h6>Step 1: Prepare your static website</h6>
                  <p>
                    Use npx create-react-app to create your app. Then, run npm
                    run build to create a production build of your app.
                  </p>
                </li>
                <li>
                  <h6>Step 2: Prepare your S3 Bucket</h6>
                  <p>
                    reate an S3 bucket in your AWS account and enable static web
                    hosting. Set the index document and error document to
                    index.html.
                  </p>
                </li>
                <li>
                  <h6>Step 3: Setup the CICD pipeline using Github Actions</h6>
                  <p>
                    Create a Github repository for your project and clone it to
                    your local machine. Use the aws s3 sync command to copy the
                    contents of your production build to your S3 bucket.
                    <pre>
                      You can also use the aws cloudfront create-invalidation
                      command to invalidate your CloudFront cache.
                    </pre>
                  </p>
                </li>
                <li>
                  <h6>Step 4: Create Github Action workflows</h6>
                  <p>
                    Define dependencies, install dependencies (npm install), and
                    build your app (npm run build) in your Github Actions
                    workflow. Use the aws-actions/configure-aws-credentials
                    action to set up AWS credentials for your workflow. If
                    you’re using CloudFront, add your distribution ID to your
                    workflow and use it to invalidate the cache after deploying
                    your app.
                  </p>
                </li>
                <li>
                  <h6>
                    Step 5: Create IAM user and grant appropriate permissions
                  </h6>
                  <p>
                    Create an IAM user for your Github Actions and grant it
                    permissions to access your S3 bucket and invalidate your
                    CloudFront cache. Create a custom IAM policy for your user.
                  </p>
                </li>
                <li>
                  <h6>
                    Step 6: Create AWS_ACCESS_KEY_ID and AWS_SECRET_KEY secrets
                  </h6>
                  <p>
                    Store your AWS credentials securely by creating two secrets
                    in your Github repository's settings. Add these secrets to
                    your Github Actions workflow so that they can be used to
                    authenticate with AWS.
                  </p>
                </li>
                <li>
                  <h6>Step 7: Push your changes to your repository</h6>
                  <p>
                    After making any changes to your app or Github Actions
                    workflow, commit your changes and push them to your Github
                    repository to trigger the workflow. Monitor the progress of
                    your workflow in the Actions tab of your Github repository.
                  </p>
                </li>
                
              </ul>
            </Typography>
            <ChildModal className="btn bg-dark_primary text-white ml-10" />
          </Box>
        </Modal>
      </div>
    </section>
  );
};

export default Hireme;
