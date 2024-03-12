import { Box, IconButton, SxProps } from "@mui/material";

import { useGlobalState } from "./provider";
import { Theme } from "@emotion/react";
import { Link } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const boxStyles: SxProps<Theme> = {
  display: "flex",
  height: "240px",
  width: "360px",
  flexWrap: "wrap",
  border: "3px solid #74a12e",
  borderRadius: "22px",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
};

const textStyles: SxProps<Theme> = {
  fontSize: "22px",
  color: "#74a12e",
  fontWeight: 600,
};

const spanStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  gap: "20px",
};

const blackText: SxProps<Theme> = {
  fontSize: "19px",
};

const calculateAge = (date: Date) => {
  // Calculate the difference in milliseconds between the current date and the provided date of birth
  const diff_ms = Date.now() - date.getTime();
  // Create a new Date object representing the difference in milliseconds and store it in the variable age_dt (age Date object)
  const age_dt = new Date(diff_ms);

  // Calculate the absolute value of the difference in years between the age Date object and the year 1970 (UNIX epoch)
  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

const Matrix = () => {
  const { globalDate, globalName } = useGlobalState();

  const date = new Date(globalDate);

  return (
    <Box>
      <Link to="/">
        <IconButton aria-label="back">
          <ArrowBackIosNewRoundedIcon />
        </IconButton>
        Inserisci un'altra data
      </Link>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          pt: "50px",
        }}
      >
        <Box sx={{ ...boxStyles }}>
          <Box sx={spanStyles}>
            <Box component="span" sx={textStyles}>
              Data di nascita:
            </Box>
            <Box component="span" sx={blackText}>
              {globalDate.toString()}
            </Box>
          </Box>
          <Box sx={spanStyles}>
            <Box component="span" sx={textStyles}>
              Nome:
            </Box>
            <Box component="span" sx={blackText}>
              {globalName}
            </Box>
          </Box>
          <Box
            sx={{
              ...spanStyles,
              flexDirection: "row",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <Box component="span" sx={textStyles}>
              Età:
            </Box>
            <Box component="span" sx={blackText}>
              {calculateAge(date)}
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...boxStyles }}>
          <Box sx={{ ...spanStyles, flexDirection: "row" }}>
            <Box sx={spanStyles}>
              <Box component="span" sx={textStyles}>
                Per me:
              </Box>
              <Box>
                <Box sx={{ display: "flex" }}>
                  <Box component="span" sx={textStyles}>
                    Cielo:
                  </Box>
                  <Box component="span" sx={textStyles}>
                    Terra:
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ...blackText,
                  }}
                >
                  <Box>
                    <Box>8</Box>
                    <Box>19</Box>
                  </Box>
                  <Box>6</Box>
                </Box>
              </Box>
            </Box>
            <Box sx={spanStyles}>
              <Box component="span" sx={textStyles}>
                Per le persone:
              </Box>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ display: "flex" }}>
                  <Box component="span" sx={textStyles}>
                    Uomo:
                  </Box>
                  <Box component="span" sx={textStyles}>
                    Donna:
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    ...blackText,
                  }}
                >
                  <Box>
                    <Box>8</Box>
                    <Box>19</Box>
                  </Box>
                  <Box>6</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ ...boxStyles }}></Box>
      </Box>
      <img src="/matrix.png" alt="matrix" width={696} height={700} />
    </Box>
    // <div>
    //   <section className="resultBlock">
    //     <div className="cont flex">
    //       <div className="schemeBlock">
    //         <div className="matrix-diagram__svg">
    //           <img src="/matrix.png" alt="matrix" width="680" height="680" />
    //         </div>

    //         <div className="matrix-diagram__circle -size-lg -position-a -purple">
    //           11
    //         </div>
    //         <div className="matrix-diagram__circle -size-md -position-a2 -blue">
    //           11
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-a1 -cyan">
    //           18
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-a3 -green">
    //           7
    //         </div>
    //         <div className="matrix-diagram__circle -size-lg -position-b -purple">
    //           6
    //         </div>
    //         <div className="matrix-diagram__circle -size-md -position-b2 -blue">
    //           19
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-b1 -cyan">
    //           13
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-b3 -green">
    //           20
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-a1b1 -white">
    //           4
    //         </div>
    //         <div className="matrix-diagram__circle -size-lg -position-c -red">
    //           9
    //         </div>
    //         <div className="matrix-diagram__circle -size-md -position-c2 -white">
    //           7
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-c1 -orange">
    //           16
    //         </div>
    //         <div className="matrix-diagram__circle -size-lg -position-d -red">
    //           8
    //         </div>
    //         <div className="matrix-diagram__circle -size-md -position-d2 -white">
    //           5
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-d1 -orange">
    //           15
    //         </div>
    //         <div className="matrix-diagram__circle -size-lg -position-e -yellow">
    //           7
    //         </div>
    //         {/* <!--
    // 						<div className="matrix-diagram__circle -size-md -position-e1 -white" ></div>
    // 						<div className="matrix-diagram__circle -size-sm -position-e2 -white" ></div>
    // 						--> */}
    //         <div className="matrix-diagram__circle -size-lg -position-f -white">
    //           17
    //         </div>
    //         <div className="matrix-diagram__circle -size-lg -position-g -white">
    //           15
    //         </div>
    //         <div className="matrix-diagram__circle -size-lg -position-y -white">
    //           17
    //         </div>
    //         {/* <!--
    // 						<div className="matrix-diagram__circle -size-sm -position-p1 -white" ></div>
    // 						<div className="matrix-diagram__circle -size-md -position-p2 -white" ></div>
    // 						<div className="matrix-diagram__circle -size-sm -position-p3 -white" ></div>
    // 						<div className="matrix-diagram__circle -size-md -position-p4 -white" ></div>
    // 						--> */}
    //         <div className="matrix-diagram__circle -size-lg -position-k -white">
    //           19
    //         </div>
    //         {/* <!--
    // 						<div className="matrix-diagram__circle -size-sm -position-s1 -white" >17</div>
    // 						<div className="matrix-diagram__circle -size-md -position-s2 -white" >7</div>
    // 						<div className="matrix-diagram__circle -size-md -position-s3 -white" >7</div>
    // 						<div className="matrix-diagram__circle -size-sm -position-s4 -white" >17</div>
    // 						--> */}
    //         <div className="matrix-diagram__circle -size-sm -position-x -white">
    //           4
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-x1 -white">
    //           19
    //         </div>
    //         <div className="matrix-diagram__circle -size-sm -position-x2 -white">
    //           20
    //         </div>

    //         {/* <!-- numbers --> */}

    //         {/* <!-- b --> */}

    //         <div className="matrix-diagram__number -position-b8">15</div>
    //         <div className="matrix-diagram__number -position-b7">9</div>
    //         <div className="matrix-diagram__number -position-k2">3</div>
    //         <div className="matrix-diagram__number -position-k1 -bold">21</div>
    //         <div className="matrix-diagram__number -position-k4">3</div>
    //         <div className="matrix-diagram__number -position-k3">9</div>
    //         <div className="matrix-diagram__number -position-k5">6</div>

    //         {/* <!-- g --> */}

    //         <div className="matrix-diagram__number -position-k8">9</div>
    //         <div className="matrix-diagram__number -position-k7">21</div>
    //         <div className="matrix-diagram__number -position-k6">9</div>
    //         <div className="matrix-diagram__number -position-c4 -bold">6</div>
    //         <div className="matrix-diagram__number -position-c6">21</div>
    //         <div className="matrix-diagram__number -position-c5">15</div>
    //         <div className="matrix-diagram__number -position-c7">6</div>

    //         {/* <!-- c --> */}

    //         <div className="matrix-diagram__number -position-y3">8</div>
    //         <div className="matrix-diagram__number -position-y2">17</div>
    //         <div className="matrix-diagram__number -position-y4">7</div>
    //         <div className="matrix-diagram__number -position-y1 -bold">8</div>
    //         <div className="matrix-diagram__number -position-y6">15</div>
    //         <div className="matrix-diagram__number -position-y5">7</div>
    //         <div className="matrix-diagram__number -position-y7">6</div>

    //         {/* <!-- y --> */}

    //         <div className="matrix-diagram__number -position-d6">5</div>
    //         <div className="matrix-diagram__number -position-y8">6</div>
    //         <div className="matrix-diagram__number -position-d5">13</div>
    //         <div className="matrix-diagram__number -position-d4 -bold">7</div>
    //         <div className="matrix-diagram__number -position-d8">22</div>
    //         <div className="matrix-diagram__number -position-d7">15</div>
    //         <div className="matrix-diagram__number -position-d9">5</div>

    //         {/* <!-- d --> */}

    //         <div className="matrix-diagram__number -position-g3">7</div>
    //         <div className="matrix-diagram__number -position-g2">17</div>
    //         <div className="matrix-diagram__number -position-g4">8</div>
    //         <div className="matrix-diagram__number -position-g1 -bold">9</div>
    //         <div className="matrix-diagram__number -position-g7">19</div>
    //         <div className="matrix-diagram__number -position-g5">10</div>
    //         <div className="matrix-diagram__number -position-g6">11</div>

    //         {/* <!-- k --> */}

    //         <div className="matrix-diagram__number -position-t3">5</div>
    //         <div className="matrix-diagram__number -position-t2">22</div>
    //         <div className="matrix-diagram__number -position-t4">7</div>
    //         <div className="matrix-diagram__number -position-t1 -bold">3</div>
    //         <div className="matrix-diagram__number -position-t6">17</div>
    //         <div className="matrix-diagram__number -position-t5">14</div>
    //         <div className="matrix-diagram__number -position-t7">7</div>

    //         {/* <!-- a --> */}

    //         <div className="matrix-diagram__number -position-a5">5</div>
    //         <div className="matrix-diagram__number -position-a4">21</div>
    //         <div className="matrix-diagram__number -position-a6">4</div>
    //         <div className="matrix-diagram__number -position-f1 -bold">10</div>
    //         <div className="matrix-diagram__number -position-f3">19</div>
    //         <div className="matrix-diagram__number -position-f2">9</div>
    //         <div className="matrix-diagram__number -position-f4">8</div>

    //         {/* <!-- f --> */}

    //         <div className="matrix-diagram__number -position-f7">12</div>
    //         <div className="matrix-diagram__number -position-f6">22</div>
    //         <div className="matrix-diagram__number -position-f8">9</div>
    //         <div className="matrix-diagram__number -position-f5 -bold">5</div>
    //         <div className="matrix-diagram__number -position-b5">16</div>
    //         <div className="matrix-diagram__number -position-b4">11</div>
    //         <div className="matrix-diagram__number -position-b6">17</div>

    //         {/* <!-- b --> */}
    //       </div>

    //       <div className="data">
    //         <div className="box_result">
    //           <div className="items flex">
    //             <div className="item">
    //               <div className="name">Data di nascita:</div>

    //               <div className="val">{globalDate.toLocaleString()}</div>
    //             </div>

    //             <div className="item">
    //               <div className="name">Età:</div>

    //               <div className="val">{17}</div>
    //             </div>

    //             <div className="item">
    //               <div className="name">Nome:</div>

    //               <div className="val">{globalName}</div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="title">Chiamando:</div>

    //         <div className="box_result">
    //           <div className="columns flex">
    //             <div className="column">
    //               <div className="column_title">Per me:</div>

    //               <table>
    //                 <tr>
    //                   <td>
    //                     <b>Cielo:</b>
    //                   </td>
    //                   <td>
    //                     <span>14</span>
    //                   </td>
    //                   <td rowSpan={2}>
    //                     <span>7</span>
    //                   </td>
    //                 </tr>

    //                 <tr>
    //                   <td>
    //                     <b>Terra:</b>
    //                   </td>
    //                   <td>
    //                     <span>20</span>
    //                   </td>
    //                   <td></td>
    //                 </tr>
    //               </table>
    //             </div>

    //             <div className="column">
    //               <div className="column_title">Per le persone:</div>

    //               <table>
    //                 <tr>
    //                   <td>
    //                     <b>Ч:</b>
    //                   </td>
    //                   <td>
    //                     <span>7</span>
    //                   </td>
    //                   <td rowSpan={2}>
    //                     <span>14</span>
    //                   </td>
    //                 </tr>

    //                 <tr>
    //                   <td>
    //                     <b>Ж:</b>
    //                   </td>
    //                   <td>
    //                     <span>7</span>
    //                   </td>
    //                   <td></td>
    //                 </tr>
    //               </table>
    //             </div>
    //           </div>

    //           <div className="feature">
    //             <div className="name">Generale:</div>

    //             <div className="val">
    //               <span>21</span>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="box_result">
    //           <div className="column_title">Programmi per uomini:</div>

    //           <table>
    //             <tr>
    //               <td className="circle">
    //                 <span>17</span>
    //               </td>
    //               <td rowSpan={2}>
    //                 <span>7</span>
    //               </td>
    //             </tr>

    //             <tr>
    //               <td className="circle">
    //                 <span>17</span>
    //               </td>
    //               <td></td>
    //             </tr>
    //           </table>

    //           <div className="column_title">Programmi per donne:</div>

    //           <table>
    //             <tr>
    //               <td className="circle">
    //                 <span>15</span>
    //               </td>
    //               <td rowSpan={2}>
    //                 <span>7</span>
    //               </td>
    //             </tr>

    //             <tr>
    //               <td className="circle">
    //                 <span>19</span>
    //               </td>
    //               <td></td>
    //             </tr>
    //           </table>

    //           <div className="feature">
    //             <div className="name">Potere familiare:</div>

    //             <div className="val">
    //               <span>14</span>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="link_btn">
    //           <a href={instagramLink} target="_blank">
    //             Ordina una consulenza
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
};

export default Matrix;
