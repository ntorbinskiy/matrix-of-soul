import { SvgIcon } from "@mui/material";

import { PersonalMatrix } from "../../utils/calculate-matrix";
import { FC } from "react";
import { svgIconStyles } from "./styles";
import { MatrixPrognosis } from "./calculatePrognosis";

interface PersonalMatrixImageMatrix {
  matrix: PersonalMatrix;
  prognosis: MatrixPrognosis;
}

const PersonalMatrixImage: FC<PersonalMatrixImageMatrix> = ({
  matrix,
  prognosis,
}) => (
  <SvgIcon sx={{ ...svgIconStyles }}>
    <svg
      width="800"
      height="800"
      viewBox="0 0 932 1039"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="658.691"
        cy="823.352"
        r="4"
        transform="rotate(-135.48 658.691 823.352)"
        fill="black"
      />
      <circle
        cx="684.764"
        cy="812.526"
        r="4"
        transform="rotate(-135.48 684.764 812.526)"
        fill="black"
      />
      <circle
        cx="632.617"
        cy="834.177"
        r="4"
        transform="rotate(-135.48 632.617 834.177)"
        fill="black"
      />
      <circle
        cx="578.356"
        cy="856.553"
        r="4"
        transform="rotate(-135.48 578.356 856.553)"
        fill="black"
      />
      <circle
        cx="551.581"
        cy="868.091"
        r="4"
        transform="rotate(-135.48 551.581 868.091)"
        fill="black"
      />
      <circle
        cx="523.393"
        cy="879.641"
        r="4"
        transform="rotate(-135.48 523.393 879.641)"
        fill="black"
      />
      <path
        d="M740.211 785.18C737.629 787.678 731.451 793.085 727.4 794.72C723.349 796.356 559.213 864.735 477.651 898.72C474.473 899.166 467.822 899.937 466.64 899.453"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="605.136"
        cy="845.721"
        r="4"
        transform="rotate(-135.48 605.136 845.721)"
        fill="white"
        stroke="black"
      />
      <text
        transform="translate(685.903 816.191) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number1}
        </tspan>
      </text>
      <text
        transform="translate(659.23 827.446) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number2}
        </tspan>
      </text>
      <text
        transform="translate(627.683 839.63) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number3}
        </tspan>
      </text>
      <text
        transform="translate(605.923 851.591) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number4}
        </tspan>
      </text>
      <text
        transform="translate(574.356 862.958) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number5}
        </tspan>
      </text>
      <text
        transform="translate(550.14 874.565) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number6}
        </tspan>
      </text>
      <text
        transform="translate(518.593 886.75) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.gd.number7}
        </tspan>
      </text>
      <text transform="translate(501.989 855)" fill="#8E8E8E" fontSize="10">
        <tspan x="2.79441" y="9.63636">
          58.5-59.5
        </tspan>
      </text>
      <text transform="translate(595.998 799)" fill="#8E8E8E" fontSize="10">
        <tspan x="31.7879" y="9.63636">
          52.5-53.5
        </tspan>
      </text>
      <text transform="translate(570.998 813)" fill="#8E8E8E" fontSize="10">
        <tspan x="35.9529" y="9.63636">
          53.5-54
        </tspan>
      </text>
      <text transform="translate(523.998 835)" fill="#8E8E8E" fontSize="10">
        <tspan x="36.8806" y="9.63636">
          56-57.5
        </tspan>
      </text>
      <text transform="translate(495.998 846)" fill="#8E8E8E" fontSize="10">
        <tspan x="32.6863" y="9.63636">
          57.5-58.5
        </tspan>
      </text>
      <text transform="translate(596.683 825.136)" fill="black" fontSize="13">
        <tspan x="0.0908203" y="12.7273">
          55
        </tspan>
      </text>
      <text transform="translate(617.998 788)" fill="#8E8E8E" fontSize="10">
        <tspan x="36.8806" y="9.63636">
          51-52.5
        </tspan>
      </text>
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 269.109 825.008)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 243.036 814.183)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 295.182 835.834)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 349.444 858.209)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 376.218 869.748)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 404.406 881.298)"
        fill="black"
      />
      <path
        d="M187.636 781.18C190.218 783.678 196.395 789.085 200.446 790.72C204.497 792.356 368.634 860.735 450.196 894.72C453.374 895.166 460.025 895.937 461.207 895.453"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="4.5"
        cy="4.5"
        r="4"
        transform="matrix(0.713006 -0.701158 -0.701158 -0.713006 322.657 848.085)"
        fill="white"
        stroke="black"
      />
      <text
        transform="translate(227.295 812.191) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number7}
        </tspan>
      </text>
      <text
        transform="translate(253.968 823.446) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number6}
        </tspan>
      </text>
      <text
        transform="translate(285.515 835.63) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number5}
        </tspan>
      </text>
      <text
        transform="translate(307.275 847.591) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number4}
        </tspan>
      </text>
      <text
        transform="translate(338.842 858.958) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number3}
        </tspan>
      </text>
      <text
        transform="translate(363.058 870.565) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number2}
        </tspan>
      </text>
      <text
        transform="translate(394.605 882.75) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.dh.number1}
        </tspan>
      </text>
      <text transform="translate(214.998 794)" fill="#8E8E8E" fontSize="10">
        <tspan x="31.7683" y="9.63636">
          68.5-69.5
        </tspan>
      </text>
      <text transform="translate(238.998 804)" fill="#8E8E8E" fontSize="10">
        <tspan x="32.5301" y="9.63636">
          67.5-68.5
        </tspan>
      </text>
      <text transform="translate(256.998 814)" fill="#8E8E8E" fontSize="10">
        <tspan x="36.7244" y="9.63636">
          66-67.5
        </tspan>
      </text>
      <text transform="translate(308.998 837)" fill="#8E8E8E" fontSize="10">
        <tspan x="35.7967" y="9.63636">
          63.5-64
        </tspan>
      </text>
      <text transform="translate(344.198 846.681)" fill="#8E8E8E" fontSize="10">
        <tspan x="31.6316" y="9.63636">
          62.5-63.5
        </tspan>
      </text>
      <text transform="translate(318.981 821.934)" fill="black" fontSize="13">
        <tspan x="0.489258" y="12.7273">
          65
        </tspan>
      </text>
      <text transform="translate(359.998 860)" fill="#8E8E8E" fontSize="10">
        <tspan x="36.7244" y="9.63636">
          61-62.5
        </tspan>
      </text>
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 113 608.375)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 102 582.375)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 124 634.375)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 147 688.375)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 158 715.375)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(1 0 0 -1 170 743.375)"
        fill="black"
      />
      <path
        d="M85.6401 520C85.7293 523.592 86.3432 531.778 88.0847 535.784C89.8263 539.791 158.912 703.631 193.237 785.051C195.19 787.597 199.392 792.81 200.574 793.294"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="4.5"
        cy="4.5"
        r="4"
        transform="matrix(1 0 0 -1 135 662.375)"
        fill="white"
        stroke="black"
      />
      <text transform="translate(84 570.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number7}
        </tspan>
      </text>
      <text transform="translate(95 596.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number6}
        </tspan>
      </text>
      <text transform="translate(108 624.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number5}
        </tspan>
      </text>
      <text transform="translate(117 652.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number4}
        </tspan>
      </text>
      <text transform="translate(130 678.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number3}
        </tspan>
      </text>
      <text transform="translate(140 705.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number2}
        </tspan>
      </text>
      <text transform="translate(153 733.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ha.number1}
        </tspan>
      </text>
      <text transform="translate(110.27 569.375)" fill="#8E8E8E" fontSize="10">
        <tspan x="7.0901" y="9.63636">
          78.5-79.5
        </tspan>
      </text>
      <text transform="translate(122.944 596.375)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.65098" y="9.63636">
          77.5-78.5
        </tspan>
      </text>
      <text transform="translate(132.944 623)" fill="#8E8E8E" fontSize="10">
        <tspan x="10.8502" y="9.63636">
          76-77.5
        </tspan>
      </text>
      <text transform="translate(154.477 677.375)" fill="#8E8E8E" fontSize="10">
        <tspan x="5.57341" y="9.63636">
          73.5-74
        </tspan>
      </text>
      <text transform="translate(164.27 705)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.91432" y="9.63636">
          72.5-73.5
        </tspan>
      </text>
      <text transform="translate(173.337 725)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.12517" y="9.63636">
          71-72.5
        </tspan>
      </text>
      <text transform="translate(145.14 648.375)" fill="black" fontSize="13">
        <tspan x="0.395508" y="12.7273">
          75
        </tspan>
      </text>
      <circle
        cx="816.14"
        cy="600.375"
        r="4"
        transform="rotate(180 816.14 600.375)"
        fill="black"
      />
      <circle
        cx="827.14"
        cy="574.375"
        r="4"
        transform="rotate(180 827.14 574.375)"
        fill="black"
      />
      <circle
        cx="805.14"
        cy="626.375"
        r="4"
        transform="rotate(180 805.14 626.375)"
        fill="black"
      />
      <circle
        cx="782.14"
        cy="680.375"
        r="4"
        transform="rotate(180 782.14 680.375)"
        fill="black"
      />
      <circle
        cx="771.14"
        cy="707.375"
        r="4"
        transform="rotate(180 771.14 707.375)"
        fill="black"
      />
      <circle
        cx="759.14"
        cy="735.375"
        r="4"
        transform="rotate(180 759.14 735.375)"
        fill="black"
      />
      <path
        d="M847.5 516C847.41 519.592 846.797 527.778 845.055 531.784C843.313 535.791 774.228 699.631 739.903 781.051C737.95 783.597 733.747 788.81 732.565 789.294"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="793.64"
        cy="653.875"
        r="4"
        transform="rotate(180 793.64 653.875)"
        fill="white"
        stroke="black"
      />
      <text transform="translate(835.14 566.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number1}
        </tspan>
      </text>
      <text transform="translate(824.14 592.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number2}
        </tspan>
      </text>
      <text transform="translate(811.14 620.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number3}
        </tspan>
      </text>
      <text transform="translate(802.14 648.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number4}
        </tspan>
      </text>
      <text transform="translate(789.14 674.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number5}
        </tspan>
      </text>
      <text transform="translate(779.14 701.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number6}
        </tspan>
      </text>
      <text transform="translate(766.14 729.375)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.cg.number7}
        </tspan>
      </text>
      <text transform="translate(768.13 566)" fill="#8E8E8E" fontSize="10">
        <tspan x="11.1575" y="9.63636">
          41-42.5
        </tspan>
      </text>
      <text transform="translate(759.804 593)" fill="#8E8E8E" fontSize="10">
        <tspan x="4.96153" y="9.63636">
          42.5-43.5
        </tspan>
      </text>
      <text transform="translate(751.804 619)" fill="#8E8E8E" fontSize="10">
        <tspan x="9.12657" y="9.63636">
          43.5-44
        </tspan>
      </text>
      <text transform="translate(735.337 674)" fill="#8E8E8E" fontSize="10">
        <tspan x="5.30974" y="9.63636">
          46-47.5
        </tspan>
      </text>
      <text transform="translate(714.337 717)" fill="#8E8E8E" fontSize="10">
        <tspan x="4.57244" y="9.63636">
          48.5-49
        </tspan>
      </text>
      <text transform="translate(772 644.375)" fill="black" fontSize="13">
        <tspan x="0.375" y="12.7273">
          45
        </tspan>
      </text>
      <text transform="translate(714.13 700)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.91432" y="9.63636">
          47.5-48.5
        </tspan>
      </text>
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 818.14 433)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 829.14 459)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 807.14 407)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 784.14 353)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 773.14 326)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-1 0 0 1 761.14 298)"
        fill="black"
      />
      <path
        d="M845.5 521.375C845.41 517.783 844.797 509.597 843.055 505.591C841.313 501.585 772.228 337.744 737.903 256.325C735.95 253.778 731.747 248.565 730.565 248.081"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="4.5"
        cy="4.5"
        r="4"
        transform="matrix(-1 0 0 1 796.14 379)"
        fill="white"
        stroke="black"
      />
      <text transform="translate(833.14 454)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number7}
        </tspan>
      </text>
      <text transform="translate(822.14 428)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number6}
        </tspan>
      </text>
      <text transform="translate(809.14 400)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number5}
        </tspan>
      </text>
      <text transform="translate(800.14 372)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number4}
        </tspan>
      </text>
      <text transform="translate(787.14 346)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number3}
        </tspan>
      </text>
      <text transform="translate(777.14 319)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number2}
        </tspan>
      </text>
      <text transform="translate(764.14 291)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.fc.number1}
        </tspan>
      </text>
      <text transform="translate(768.13 458)" fill="#8E8E8E" fontSize="10">
        <tspan x="10.4788" y="9.63636">
          38.5-39
        </tspan>
      </text>
      <text transform="translate(756.804 432)" fill="#8E8E8E" fontSize="10">
        <tspan x="5.96739" y="9.63636">
          37.5-38.5
        </tspan>
      </text>
      <text transform="translate(752.337 405)" fill="#8E8E8E" fontSize="10">
        <tspan x="5.41716" y="9.63636">
          36-37.5
        </tspan>
      </text>
      <text transform="translate(728.337 352)" fill="#8E8E8E" fontSize="10">
        <tspan x="4.48943" y="9.63636">
          33.5-34
        </tspan>
      </text>
      <text transform="translate(770 376)" fill="black" fontSize="13">
        <tspan x="0.406738" y="12.7273">
          35
        </tspan>
      </text>
      <text transform="translate(716.337 308)" fill="#8E8E8E" fontSize="10">
        <tspan x="5.41716" y="9.63636">
          31-32.5
        </tspan>
      </text>
      <text transform="translate(710.13 324)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.1233" y="9.63636">
          32.5-33.5
        </tspan>
      </text>
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 656.738 209.735)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 682.811 220.56)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 630.665 198.909)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 576.403 176.534)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 549.629 164.995)"
        fill="black"
      />
      <circle
        cx="4"
        cy="4"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 521.44 153.445)"
        fill="black"
      />
      <path
        d="M738.211 253.563C735.629 251.065 729.451 245.658 725.4 244.023C721.349 242.387 557.213 174.008 475.651 140.023C472.473 139.577 465.822 138.806 464.64 139.29"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="4.5"
        cy="4.5"
        r="4"
        transform="matrix(-0.713006 0.701158 0.701158 0.713006 603.189 186.658)"
        fill="white"
        stroke="black"
      />
      <text
        transform="translate(683.903 205.923) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number7}
        </tspan>
      </text>
      <text
        transform="translate(657.23 194.669) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number6}
        </tspan>
      </text>
      <text
        transform="translate(625.683 182.484) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number5}
        </tspan>
      </text>
      <text
        transform="translate(603.923 170.523) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number4}
        </tspan>
      </text>
      <text
        transform="translate(572.356 159.157) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number3}
        </tspan>
      </text>
      <text
        transform="translate(548.14 147.55) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number2}
        </tspan>
      </text>
      <text
        transform="translate(516.593 135.365) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.bf.number1}
        </tspan>
      </text>
      <text transform="translate(467.998 163)" fill="#8E8E8E" fontSize="10">
        <tspan x="37.0808" y="9.63636">
          21-22.5
        </tspan>
      </text>
      <text transform="translate(624.998 231)" fill="#8E8E8E" fontSize="10">
        <tspan x="36.3435" y="9.63636">
          28.5-29
        </tspan>
      </text>
      <text transform="translate(594.998 220)" fill="#8E8E8E" fontSize="10">
        <tspan x="32.8865" y="9.63636">
          27.5-28.5
        </tspan>
      </text>
      <text transform="translate(569.998 209)" fill="#8E8E8E" fontSize="10">
        <tspan x="37.0808" y="9.63636">
          26-27.5
        </tspan>
      </text>
      <text transform="translate(514.998 186)" fill="#8E8E8E" fontSize="10">
        <tspan x="36.2312" y="9.63636">
          23.5-24
        </tspan>
      </text>
      <text transform="translate(485.998 175)" fill="#8E8E8E" fontSize="10">
        <tspan x="31.9881" y="9.63636">
          22.5-23.5
        </tspan>
      </text>
      <text transform="translate(590.43 195.468)" fill="black" fontSize="13">
        <tspan x="0.109863" y="12.7273">
          25
        </tspan>
      </text>
      <circle
        cx="274.157"
        cy="216.391"
        r="4"
        transform="rotate(44.52 274.157 216.391)"
        fill="black"
      />
      <circle
        cx="248.084"
        cy="227.217"
        r="4"
        transform="rotate(44.52 248.084 227.217)"
        fill="black"
      />
      <circle
        cx="300.23"
        cy="205.566"
        r="4"
        transform="rotate(44.52 300.23 205.566)"
        fill="black"
      />
      <circle
        cx="354.492"
        cy="183.19"
        r="4"
        transform="rotate(44.52 354.492 183.19)"
        fill="black"
      />
      <circle
        cx="381.266"
        cy="171.652"
        r="4"
        transform="rotate(44.52 381.266 171.652)"
        fill="black"
      />
      <circle
        cx="409.454"
        cy="160.102"
        r="4"
        transform="rotate(44.52 409.454 160.102)"
        fill="black"
      />
      <path
        d="M192.636 254.563C195.219 252.065 201.396 246.658 205.447 245.023C209.498 243.387 373.634 175.008 455.196 141.023C458.374 140.577 465.026 139.806 466.208 140.29"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle
        cx="327.711"
        cy="194.022"
        r="4"
        transform="rotate(44.52 327.711 194.022)"
        fill="white"
        stroke="black"
      />
      <text
        transform="translate(232.296 206.923) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number1}
        </tspan>
      </text>
      <text
        transform="translate(258.968 195.669) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number2}
        </tspan>
      </text>
      <text
        transform="translate(290.516 183.484) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number3}
        </tspan>
      </text>
      <text
        transform="translate(312.276 171.523) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number4}
        </tspan>
      </text>
      <text
        transform="translate(343.842 160.157) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number5}
        </tspan>
      </text>
      <text
        transform="translate(368.058 148.55) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number6}
        </tspan>
      </text>
      <text
        transform="translate(399.606 136.365) rotate(-1.30896)"
        fill="black"
        fontSize="13"
      >
        <tspan x="0.0429688" y="12.7273">
          {prognosis.eb.number7}
        </tspan>
      </text>
      <text transform="translate(238.174 235)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.55015" y="9.63636">
          11-12.5
        </tspan>
      </text>
      <text transform="translate(261.805 222)" fill="#8E8E8E" fontSize="10">
        <tspan x="6.72911" y="9.63636">
          12.5-13.5
        </tspan>
      </text>
      <text transform="translate(287.033 210)" fill="#8E8E8E" fontSize="10">
        <tspan x="1.9322" y="9.63636">
          13.5-14
        </tspan>
      </text>
      <text transform="translate(252.753 191)" fill="#8E8E8E" fontSize="10">
        <tspan x="95.7206" y="9.63636">
          16-17.5
        </tspan>
      </text>
      <text transform="translate(281.753 177)" fill="#8E8E8E" fontSize="10">
        <tspan x="91.5263" y="9.63636">
          17.5-18.5
        </tspan>
      </text>
      <text transform="translate(296.753 167)" fill="#8E8E8E" fontSize="10">
        <tspan x="94.9834" y="9.63636">
          18.5-19
        </tspan>
      </text>
      <text transform="translate(326.684 199.136)" fill="black" fontSize="13">
        <tspan x="0.0239258" y="12.7273">
          15
        </tspan>
      </text>
      <circle cx="117" cy="436" r="4" fill="black" />
      <circle cx="106" cy="462" r="4" fill="black" />
      <circle cx="128" cy="410" r="4" fill="black" />
      <circle cx="151" cy="356" r="4" fill="black" />
      <circle cx="162" cy="329" r="4" fill="black" />
      <circle cx="174" cy="301" r="4" fill="black" />
      <path
        d="M85.6401 520.375C85.7293 516.783 86.3432 508.597 88.0847 504.591C89.8263 500.585 158.912 336.744 193.237 255.325C195.19 252.778 199.392 247.565 200.574 247.081"
        stroke="black"
        strokeLinejoin="bevel"
      />
      <circle cx="139.5" cy="382.5" r="4" fill="white" stroke="black" />
      <text transform="translate(84 453)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number1}
        </tspan>
      </text>
      <text transform="translate(95 427)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number2}
        </tspan>
      </text>
      <text transform="translate(108 399)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number3}
        </tspan>
      </text>
      <text transform="translate(117 371)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number4}
        </tspan>
      </text>
      <text transform="translate(130 345)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number5}
        </tspan>
      </text>
      <text transform="translate(140 318)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number6}
        </tspan>
      </text>
      <text transform="translate(153 290)" fill="black" fontSize="13">
        <tspan x="0.0429688" y="12.7273">
          {prognosis.ae.number7}
        </tspan>
      </text>
      <text transform="translate(103.5 455)" fill="#8E8E8E" fontSize="10">
        <tspan x="12.4238" y="9.63636">
          1-2.5
        </tspan>
      </text>
      <text transform="translate(116.5 432)" fill="#8E8E8E" fontSize="10">
        <tspan x="7.21875" y="9.63636">
          2.5-3.5
        </tspan>
      </text>
      <text transform="translate(123.5 406)" fill="#8E8E8E" fontSize="10">
        <tspan x="11.3252" y="9.63636">
          3.5-4
        </tspan>
      </text>
      <text transform="translate(147.5 350)" fill="#8E8E8E" fontSize="10">
        <tspan x="12.3652" y="9.63636">
          6-7.5
        </tspan>
      </text>
      <text transform="translate(161.5 323)" fill="#8E8E8E" fontSize="10">
        <tspan x="8.05859" y="9.63636">
          7.5-8.5
        </tspan>
      </text>
      <text transform="translate(166.5 306)" fill="#8E8E8E" fontSize="10">
        <tspan x="7.29688" y="9.63636">
          8.5-9.5
        </tspan>
      </text>
      <text transform="translate(146.5 380.429)" fill="black" fontSize="13">
        <tspan x="0.0454102" y="12.7273">
          5
        </tspan>
      </text>
      <line
        x1="83.6566"
        y1="520.098"
        x2="465.657"
        y2="520.098"
        stroke="#BBBBBB"
        strokeOpacity="0.733333"
      />
      <line
        x1="467.01"
        y1="520.245"
        x2="737.125"
        y2="790.359"
        stroke="#BBBBBB"
      />
      <line
        x1="196.303"
        y1="790.359"
        x2="466.418"
        y2="520.245"
        stroke="#BBBBBB"
      />
      <line
        x1="198.013"
        y1="247.247"
        x2="467.127"
        y2="520.362"
        stroke="#BBBBBB"
      />
      <line x1="466.3" y1="520.247" x2="734.3" y2="248.247" stroke="#BBBBBB" />
      <line
        x1="466.657"
        y1="520.098"
        x2="849.657"
        y2="520.098"
        stroke="#BBBBBB"
      />
      <line
        x1="467.157"
        y1="520.598"
        x2="467.157"
        y2="902.598"
        stroke="#BBBBBB"
      />
      <line
        x1="467.157"
        y1="138.598"
        x2="467.157"
        y2="520.598"
        stroke="#BBBBBB"
      />
      <path
        d="M596.093 388.598L587.741 390.889L593.901 396.976L596.093 388.598ZM491.19 495.817L591.882 393.926L590.815 392.872L490.123 494.763L491.19 495.817Z"
        fill="#D62929"
      />
      <path
        d="M335.657 650.664L344.022 648.423L337.898 642.299L335.657 650.664ZM340.96 646.422L442.253 545.128L441.192 544.068L339.899 645.361L340.96 646.422Z"
        fill="#D62929"
      />
      <path
        d="M338.657 388.598L340.769 396.997L346.986 390.968L338.657 388.598ZM342.817 393.966L442.544 496.802L443.621 495.757L343.894 392.922L342.817 393.966Z"
        fill="#B428E4"
      />
      <path
        d="M597.524 650.863L595.298 642.493L589.163 648.606L597.524 650.863ZM491.125 545.127L592.228 646.61L593.291 645.552L492.188 544.069L491.125 545.127Z"
        fill="#B428E4"
      />
      <text
        transform="translate(347.341 373.79) rotate(45.42)"
        fill="black"
        fontSize="15"
      >
        <tspan x="24.3279" y="14.4545">
          linea maschile
        </tspan>
      </text>
      <text
        transform="translate(481.811 481.123) rotate(-45.34)"
        fill="black"
        fontSize="15"
      >
        <tspan x="21.3704" y="14.4545">
          linea femminile
        </tspan>
      </text>
      <line
        x1="471.305"
        y1="747.243"
        x2="696.305"
        y2="524.243"
        stroke="black"
        strokeDasharray="7 7"
      />
      <rect
        x="467.726"
        y="190.719"
        width="466"
        height="468.031"
        transform="rotate(45 467.726 190.719)"
        stroke="black"
        strokeWidth="3"
      />
      <rect
        x="234.315"
        y="283.542"
        width="466"
        height="468.031"
        stroke="black"
        strokeWidth="3"
      />
      <circle cx="467.657" cy="520.598" r="35" fill="#EFD700" />
      <text fill="white" fontSize="40">
        <tspan x="467" y="535.144">
          {matrix.centerNumber}
        </tspan>
      </text>
      <circle
        cx="218.657"
        cy="768.598"
        r="34"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="35">
        <tspan x="215" y="781.325">
          {matrix.h1}
        </tspan>
      </text>
      <circle
        cx="713.657"
        cy="764.598"
        r="34"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="35">
        <tspan x="715" y="777.325">
          {matrix.g1}
        </tspan>
      </text>
      <circle
        cx="709.657"
        cy="272.598"
        r="34"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="35">
        <tspan x="710" y="285.325">
          {matrix.f1}
        </tspan>
      </text>
      <circle
        cx="221"
        cy="269"
        r="34"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="35">
        <tspan x="219" y="281.727">
          {matrix.e1}
        </tspan>
      </text>
      <circle cx="467.657" cy="867.598" r="35" fill="#FF6363" />
      <text fill="white" fontSize="40">
        <tspan x="467" y="882.144">
          {matrix.d1}
        </tspan>
      </text>
      <circle cx="814.657" cy="517.598" r="35" fill="#FF6363" />
      <text fill="white" fontSize="40">
        <tspan x="813" y="532.144">
          {matrix.c1}
        </tspan>
      </text>
      <circle cx="467" cy="172" r="35" fill="#AD52F5" />
      <text fill="white" fontSize="40">
        <tspan x="465" y="186.545">
          {matrix.b1}
        </tspan>
      </text>
      <circle cx="118.657" cy="520.598" r="35" fill="#AD52F5" />
      <text fill="white" fontSize="40">
        <tspan x="115" y="535.144">
          {matrix.a1}
        </tspan>
      </text>
      <circle
        cx="754.657"
        cy="520.598"
        r="24"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="30">
        <tspan x="753" y="531.507">
          {matrix.c2}
        </tspan>
      </text>
      <circle
        cx="290.657"
        cy="343.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="290" y="351.234">
          {matrix.e3}
        </tspan>
      </text>
      <circle
        cx="639.657"
        cy="347.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="638" y="355.234">
          {matrix.f3}
        </tspan>
      </text>
      <circle
        cx="639.657"
        cy="691.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="640" y="699.235">
          {matrix.g3}
        </tspan>
      </text>
      <circle
        cx="290.657"
        cy="694.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="290" y="702.235">
          {matrix.h3}
        </tspan>
      </text>
      <circle cx="178.657" cy="520.598" r="25" fill="#3D87F7" />
      <text fill="white" fontSize="30">
        <tspan x="175" y="531.507">
          {matrix.a2}
        </tspan>
      </text>
      <circle cx="468" cy="232" r="25" fill="#3D87F7" />
      <text fill="white" fontSize="30">
        <tspan x="465" y="242.909">
          {matrix.b2}
        </tspan>
      </text>
      <circle
        cx="671.657"
        cy="722.598"
        r="24"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="30">
        <tspan x="672" y="733.507">
          {matrix.g2}
        </tspan>
      </text>
      <circle
        cx="467.657"
        cy="808.598"
        r="24"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="30">
        <tspan x="467" y="819.507">
          {matrix.d2}
        </tspan>
      </text>
      <circle
        cx="256.657"
        cy="724.598"
        r="24"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="30">
        <tspan x="256" y="735.507">
          {matrix.h2}
        </tspan>
      </text>
      <circle
        cx="671.657"
        cy="318.598"
        r="24"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="30">
        <tspan x="670" y="329.507">
          {matrix.f2}
        </tspan>
      </text>
      <circle
        cx="261.657"
        cy="310.598"
        r="24"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="30">
        <tspan x="261" y="321.507">
          {matrix.e2}
        </tspan>
      </text>
      <circle
        cx="631.657"
        cy="589.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="632" y="597.235">
          {matrix.o}
        </tspan>
      </text>
      <circle
        cx="528.657"
        cy="691.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="528" y="699.235">
          {matrix.n}
        </tspan>
      </text>
      <circle
        cx="577.657"
        cy="630.598"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="577" y="638.235">
          {matrix.k}
        </tspan>
      </text>
      <circle cx="466.657" cy="384.598" r="20" fill="#2DEB62" />
      <text fill="white" fontSize="21">
        <tspan x="465" y="392.234">
          {matrix.b4}
        </tspan>
      </text>
      <circle cx="330.657" cy="520.598" r="20" fill="#2DEB62" />
      <text fill="white" fontSize="21">
        <tspan x="330" y="528.235">
          {matrix.a4}
        </tspan>
      </text>
      <circle cx="223.657" cy="519.598" r="20" fill="#16E9DD" />
      <text fill="white" fontSize="21">
        <tspan x="222" y="527.235">
          {matrix.a3}
        </tspan>
      </text>
      <circle cx="467" cy="277" r="20" fill="#16E9DD" />
      <text fill="white" fontSize="21">
        <tspan x="465" y="284.636">
          {matrix.b3}
        </tspan>
      </text>
      <circle cx="467.657" cy="763.598" r="20" fill="#FABF26" />
      <text fill="white" fontSize="21">
        <tspan x="467" y="771.235">
          {matrix.d3}
        </tspan>
      </text>
      <circle cx="709.657" cy="520.598" r="20" fill="#FABF26" />
      <text fill="white" fontSize="21">
        <tspan x="708" y="528.235">
          {matrix.c3}
        </tspan>
      </text>
      <path
        d="M510.145 638.246L518.098 630.648C520.095 628.74 523.26 628.812 525.168 630.809C527.075 632.806 527.003 635.971 525.006 637.878L517.053 645.477L510.145 638.246Z"
        fill="#EF4142"
      />
      <path
        d="M517.053 645.477L509.454 637.523C507.546 635.526 507.619 632.361 509.615 630.454C511.612 628.546 514.777 628.619 516.685 630.615L524.283 638.569L517.053 645.477Z"
        fill="#EF4142"
      />
      <path
        d="M602.782 564.644C600.15 563.679 594.375 562.771 593.961 566.58C593.19 573.662 604.787 569.119 603.329 575.613C602.509 579.269 595.67 578.337 593.55 577.118"
        stroke="#B0DF63"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M598.5 560.2V563.8M598.5 578.2V581.8"
        stroke="#B0DF63"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text fill="black" fontSize="20">
        <tspan x="64.25" y="529.273">
          0
        </tspan>
      </text>
      <text fill="black" fontSize="20">
        <tspan x="455.695" y="132.273">
          20
        </tspan>
      </text>
      <text fill="black" fontSize="20">
        <tspan x="731.383" y="245.273">
          30
        </tspan>
      </text>
      <text fill="black" fontSize="20">
        <tspan x="856.334" y="527.273">
          40
        </tspan>
      </text>
      <text fill="black" fontSize="20">
        <tspan x="181.102" y="239.273">
          10
        </tspan>
      </text>
      <circle
        cx="538"
        cy="518"
        r="34"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="35">
        <tspan x="537.5" y="530.727">
          {matrix.centerNumber2}
        </tspan>
      </text>
      <circle
        cx="601"
        cy="521"
        r="19"
        fill="white"
        stroke="#A3A3A3"
        strokeWidth="2"
      />
      <text fill="black" fontSize="21">
        <tspan x="601" y="528.636">
          {matrix.centerNumber3}
        </tspan>
      </text>
    </svg>
  </SvgIcon>
);

export default PersonalMatrixImage;
