import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#252B3B",
        
        width: "99vw",
        color: "#fff",
        paddingBottom: "50px",
        marginBottom: "120px",
      }}
    >
      <div style={{ margin: "0 auto", width: "1440px" }}>
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Logo />

            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.997 3.89523C7.87374 3.89523 5.35309 5.72847 5.35309 8C5.35309 10.2715 7.87374 12.1048 10.997 12.1048C14.1203 12.1048 16.641 10.2715 16.641 8C16.641 5.72847 14.1203 3.89523 10.997 3.89523ZM10.997 10.6678C8.97722 10.6678 7.32888 9.46899 7.32888 8C7.32888 6.53101 8.97722 5.3322 10.997 5.3322C13.0169 5.3322 14.6652 6.53101 14.6652 8C14.6652 9.46899 13.0169 10.6678 10.997 10.6678ZM16.8722 2.77047C16.1429 2.77047 15.554 3.19876 15.554 3.72911C15.554 4.25947 16.1429 4.68776 16.8722 4.68776C17.6014 4.68776 18.1903 4.26147 18.1903 3.72911C18.1875 3.19675 17.6014 2.77047 16.8722 2.77047ZM21.9988 8C21.9988 6.89525 22.0125 5.80051 21.9272 4.69777C21.8419 3.4169 21.4402 2.28014 20.1523 1.3435C18.8617 0.404868 17.3014 0.114672 15.5403 0.0526304C14.0213 -0.0094115 12.516 0.000595291 10.9998 0.000595291C9.4808 0.000595291 7.97556 -0.0094115 6.45931 0.0526304C4.69815 0.114672 3.13513 0.40687 1.84728 1.3435C0.556684 2.28214 0.157672 3.4169 0.0723655 4.69777C-0.0129406 5.80252 0.000818509 6.89725 0.000818509 8C0.000818509 9.10275 -0.0129406 10.1995 0.0723655 11.3022C0.157672 12.5831 0.559436 13.7199 1.84728 14.6565C3.13788 15.5951 4.69815 15.8853 6.45931 15.9474C7.97831 16.0094 9.48355 15.9994 10.9998 15.9994C12.5188 15.9994 14.024 16.0094 15.5403 15.9474C17.3014 15.8853 18.8645 15.5931 20.1523 14.6565C21.4429 13.7179 21.8419 12.5831 21.9272 11.3022C22.0153 10.1995 21.9988 9.10475 21.9988 8ZM19.5772 12.7192C19.3763 13.0834 19.1341 13.3556 18.7461 13.6358C18.3581 13.918 17.9866 14.0941 17.4858 14.2402C16.0384 14.6585 12.6013 14.5644 10.997 14.5644C9.39274 14.5644 5.95298 14.6585 4.50553 14.2422C4.0047 14.0961 3.63045 13.92 3.2452 13.6378C2.8572 13.3556 2.61504 13.0854 2.41415 12.7212C1.84178 11.6665 1.97111 9.16679 1.97111 8C1.97111 6.83321 1.84178 4.33152 2.41415 3.27881C2.61504 2.91456 2.8572 2.64238 3.2452 2.36219C3.63321 2.082 4.0047 1.90388 4.50553 1.75778C5.95298 1.3415 9.39274 1.43556 10.997 1.43556C12.6013 1.43556 16.0411 1.3415 17.4886 1.75778C17.9894 1.90388 18.3636 2.08 18.7489 2.36219C19.1369 2.64438 19.3791 2.91456 19.5799 3.27881C20.1523 4.33152 20.023 6.83321 20.023 8C20.023 9.16679 20.1523 11.6665 19.5772 12.7192Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                instagram
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1167 0H0.883333C0.395833 0 0 0.395833 0 0.883333V15.1167C0 15.6042 0.395833 16 0.883333 16H8V9.66667H6.0875V7.33333H8V5.60833C8 3.54167 9.43333 2.41667 11.2792 2.41667C12.1625 2.41667 13.1125 2.48333 13.3333 2.5125V4.67083H11.8625C10.8583 4.67083 10.6667 5.14583 10.6667 5.84583V7.33333H13.0583L12.7458 9.66667H10.6667V16H15.1167C15.6042 16 16 15.6042 16 15.1167V0.883333C16 0.395833 15.6042 0 15.1167 0Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                Facebook
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.54405C15.4116 1.79786 14.7713 1.98053 14.1118 2.05168C14.7925 1.64596 15.3097 1.00565 15.5539 0.244201C14.9251 0.619156 14.2137 0.894123 13.4734 1.03641C12.8735 0.396106 12.0216 0 11.0775 0C9.26043 0 7.79906 1.4729 7.79906 3.28038C7.79906 3.53419 7.82983 3.78801 7.87982 4.03221C5.159 3.88992 2.73236 2.59007 1.1191 0.599928C0.834515 1.08833 0.672996 1.64596 0.672996 2.2555C0.672996 3.39382 1.25177 4.39755 2.13436 4.98786C1.59596 4.96671 1.08833 4.81481 0.651845 4.57061V4.61098C0.651845 6.20502 1.77863 7.52602 3.28038 7.82983C3.00541 7.90097 2.71121 7.94135 2.41702 7.94135C2.20358 7.94135 2.00168 7.9202 1.79786 7.89136C2.2132 9.1912 3.42267 10.1353 4.86288 10.1661C3.73609 11.0487 2.32472 11.5678 0.792213 11.5678C0.517246 11.5678 0.26343 11.5582 0 11.5275C1.45367 12.46 3.17846 12.9984 5.03593 12.9984C11.066 12.9984 14.3656 8.00289 14.3656 3.66687C14.3656 3.52458 14.3656 3.38229 14.356 3.24C14.9944 2.77274 15.5539 2.19397 16 1.54405Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                Twitter{" "}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="22"
                height="16"
                viewBox="0 0 22 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.997 3.89523C7.87374 3.89523 5.35309 5.72847 5.35309 8C5.35309 10.2715 7.87374 12.1048 10.997 12.1048C14.1203 12.1048 16.641 10.2715 16.641 8C16.641 5.72847 14.1203 3.89523 10.997 3.89523ZM10.997 10.6678C8.97722 10.6678 7.32888 9.46899 7.32888 8C7.32888 6.53101 8.97722 5.3322 10.997 5.3322C13.0169 5.3322 14.6652 6.53101 14.6652 8C14.6652 9.46899 13.0169 10.6678 10.997 10.6678ZM16.8722 2.77047C16.1429 2.77047 15.554 3.19876 15.554 3.72911C15.554 4.25947 16.1429 4.68776 16.8722 4.68776C17.6014 4.68776 18.1903 4.26147 18.1903 3.72911C18.1875 3.19675 17.6014 2.77047 16.8722 2.77047ZM21.9988 8C21.9988 6.89525 22.0125 5.80051 21.9272 4.69777C21.8419 3.4169 21.4402 2.28014 20.1523 1.3435C18.8617 0.404868 17.3014 0.114672 15.5403 0.0526304C14.0213 -0.0094115 12.516 0.000595291 10.9998 0.000595291C9.4808 0.000595291 7.97556 -0.0094115 6.45931 0.0526304C4.69815 0.114672 3.13513 0.40687 1.84728 1.3435C0.556684 2.28214 0.157672 3.4169 0.0723655 4.69777C-0.0129406 5.80252 0.000818509 6.89725 0.000818509 8C0.000818509 9.10275 -0.0129406 10.1995 0.0723655 11.3022C0.157672 12.5831 0.559436 13.7199 1.84728 14.6565C3.13788 15.5951 4.69815 15.8853 6.45931 15.9474C7.97831 16.0094 9.48355 15.9994 10.9998 15.9994C12.5188 15.9994 14.024 16.0094 15.5403 15.9474C17.3014 15.8853 18.8645 15.5931 20.1523 14.6565C21.4429 13.7179 21.8419 12.5831 21.9272 11.3022C22.0153 10.1995 21.9988 9.10475 21.9988 8ZM19.5772 12.7192C19.3763 13.0834 19.1341 13.3556 18.7461 13.6358C18.3581 13.918 17.9866 14.0941 17.4858 14.2402C16.0384 14.6585 12.6013 14.5644 10.997 14.5644C9.39274 14.5644 5.95298 14.6585 4.50553 14.2422C4.0047 14.0961 3.63045 13.92 3.2452 13.6378C2.8572 13.3556 2.61504 13.0854 2.41415 12.7212C1.84178 11.6665 1.97111 9.16679 1.97111 8C1.97111 6.83321 1.84178 4.33152 2.41415 3.27881C2.61504 2.91456 2.8572 2.64238 3.2452 2.36219C3.63321 2.082 4.0047 1.90388 4.50553 1.75778C5.95298 1.3415 9.39274 1.43556 10.997 1.43556C12.6013 1.43556 16.0411 1.3415 17.4886 1.75778C17.9894 1.90388 18.3636 2.08 18.7489 2.36219C19.1369 2.64438 19.3791 2.91456 19.5799 3.27881C20.1523 4.33152 20.023 6.83321 20.023 8C20.023 9.16679 20.1523 11.6665 19.5772 12.7192Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                instagram
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1167 0H0.883333C0.395833 0 0 0.395833 0 0.883333V15.1167C0 15.6042 0.395833 16 0.883333 16H8V9.66667H6.0875V7.33333H8V5.60833C8 3.54167 9.43333 2.41667 11.2792 2.41667C12.1625 2.41667 13.1125 2.48333 13.3333 2.5125V4.67083H11.8625C10.8583 4.67083 10.6667 5.14583 10.6667 5.84583V7.33333H13.0583L12.7458 9.66667H10.6667V16H15.1167C15.6042 16 16 15.6042 16 15.1167V0.883333C16 0.395833 15.6042 0 15.1167 0Z"
                  fill="#FFFFFF"
                />
              </svg>
              <span
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                Facebook
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <svg
                width="16"
                height="13"
                viewBox="0 0 16 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 1.54405C15.4116 1.79786 14.7713 1.98053 14.1118 2.05168C14.7925 1.64596 15.3097 1.00565 15.5539 0.244201C14.9251 0.619156 14.2137 0.894123 13.4734 1.03641C12.8735 0.396106 12.0216 0 11.0775 0C9.26043 0 7.79906 1.4729 7.79906 3.28038C7.79906 3.53419 7.82983 3.78801 7.87982 4.03221C5.159 3.88992 2.73236 2.59007 1.1191 0.599928C0.834515 1.08833 0.672996 1.64596 0.672996 2.2555C0.672996 3.39382 1.25177 4.39755 2.13436 4.98786C1.59596 4.96671 1.08833 4.81481 0.651845 4.57061V4.61098C0.651845 6.20502 1.77863 7.52602 3.28038 7.82983C3.00541 7.90097 2.71121 7.94135 2.41702 7.94135C2.20358 7.94135 2.00168 7.9202 1.79786 7.89136C2.2132 9.1912 3.42267 10.1353 4.86288 10.1661C3.73609 11.0487 2.32472 11.5678 0.792213 11.5678C0.517246 11.5678 0.26343 11.5582 0 11.5275C1.45367 12.46 3.17846 12.9984 5.03593 12.9984C11.066 12.9984 14.3656 8.00289 14.3656 3.66687C14.3656 3.52458 14.3656 3.38229 14.356 3.24C14.9944 2.77274 15.5539 2.19397 16 1.54405Z"
                  fill="#FFFFFF"
                />
              </svg>
              <p
                style={{
                  marginLeft: "8px",
                  fontSize: "14px",
                  color: "#FFFFFF",
                }}
              >
                Twitter
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingTop: "28px",
              paddingLeft: "250px",
              fontSize: "14px",
            }}
          >
            <p style={{ fontSize: "18px", paddingBottom: "10px"}}>Use Cases</p>
            <p>UI design</p>
            <p>UX design</p>
            <p>Prototyping</p>
            <p>UI design</p>
            <p>UX design</p>
            <p>Prototyping</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingTop: "28px",
              paddingLeft: "150px",
              fontSize: "14px",
            }}
          >
            <p style={{ fontSize: "18px", paddingBottom: "10px" }}>Explore</p>
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I Love Figma</p>
            <p>Figma</p>
            <p>Customers</p>
            <p>Why I Love Figma</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              paddingTop: "28px",
              paddingLeft: "150px",
              fontSize: "14px",
            }}
          >
            <p style={{ fontSize: "18px", paddingBottom: "10px" }}>Resourses</p>
            <p>Community Resourses Hub</p>
            <p>Support</p>
            <p>Education</p>
            <p>Community Resourses Hub</p>
            <p>Support</p>
            <p>Education</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            paddingLeft:"150px",
              paddingTop: " 30px",
              gap: "20px",
             
            }}
          >
            <p style={{fontSize:"22px",marginRight: "30px", paddingBottom:"20px" }}> Subscribe to our newsletter</p>
            <div style={{}}>
              <input
                style={{
                  height: "56px",
                  width: "296.38px",

                  paddingLeft: "20px",
                }}
                placeholder="Email"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
