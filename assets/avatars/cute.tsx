import { AvatarSizes } from '.'

export default function Cute({ size }: { size: AvatarSizes }) {
	return (
		<svg width={size} height={size} viewBox='0 0 1250 1250' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M1177.29 344.362C1425.24 821.895 989.379 1360.7 469.771 1229.17C236.519 1171.16 49.0194 968.954 10.2122 731.617C-33.9055 495.506 72.7122 241.83 272.059 108.251C545.343 -79.6573 924.019 -17.1574 1119.69 251.634C1120.91 252.859 1120.51 254.902 1118.87 256.127C1117.65 257.352 1115.6 256.944 1114.38 255.31C1087.42 220.588 1056.78 189.134 1023.28 160.947C968.137 113.97 903.594 77.2054 835.376 52.2871C488.153 -73.5299 107.026 135.62 31.0455 498.774C-54.7388 905.637 291.258 1280.23 703.84 1224.26C1022.06 1184.23 1258.58 890.522 1232.43 571.078C1226.72 493.872 1206.29 417.483 1172.39 347.222C1171.57 345.996 1172.39 344.362 1173.61 343.545C1174.84 342.728 1176.47 343.137 1177.29 344.362Z'
				fill='black'
			/>
			<mask
				id='mask0_710_2561'
				style={{ maskType: 'alpha' }}
				maskUnits='userSpaceOnUse'
				x='38'
				y='39'
				width='1197'
				height='1197'
			>
				<circle cx='636.033' cy='637.033' r='598.033' fill='#D9D9D9' />
			</mask>
			<g mask='url(#mask0_710_2561)'>
				<path
					d='M961.882 1130.76C959.137 1132.73 956 1134.69 953.255 1136.65C950.118 1138.61 947.373 1140.57 944.235 1142.14C941.49 1143.71 939.137 1145.27 936.392 1146.84C936 1147.24 935.608 1147.24 935.216 1147.63C926.196 1153.12 916.784 1158.22 907.373 1162.92C904.628 1164.49 901.49 1166.06 898.745 1167.24C898.745 1167.24 898.353 1167.63 897.961 1167.63C894.824 1169.2 891.686 1170.76 888.549 1172.33C882.275 1175.47 875.608 1178.22 869.333 1180.96C866.196 1182.53 862.667 1183.71 859.529 1184.88C856.392 1186.06 852.863 1187.63 849.726 1188.8C846.588 1189.98 843.059 1191.55 839.922 1192.73C839.922 1192.73 839.922 1192.73 839.529 1192.73C836.392 1193.9 832.863 1195.08 829.726 1196.25C822.667 1198.61 815.216 1200.96 808.157 1203.31C805.804 1204.1 803.059 1204.88 800.706 1205.67C793.255 1208.02 785.804 1209.98 778.353 1211.55C775.608 1212.33 772.863 1212.73 769.726 1213.51C762.667 1215.08 755.216 1216.65 748.157 1218.22C746.588 1218.61 745.412 1218.61 743.843 1219C741.49 1219.39 738.745 1219.78 736.392 1220.18C732.863 1220.57 729.726 1221.35 726.196 1221.74C724.628 1222.14 723.059 1222.14 721.49 1222.53C719.529 1222.92 717.177 1223.31 714.824 1223.31C708.549 1224.1 701.882 1224.88 695.608 1225.67C693.647 1226.06 691.294 1226.06 689.333 1226.45H688.941C686.196 1226.84 683.451 1226.84 680.706 1227.24C677.961 1227.63 675.216 1227.63 672.471 1227.63C670.902 1227.63 668.941 1228.02 667.373 1228.02C664.235 1228.02 661.49 1228.41 658.745 1228.41C654.824 1228.41 651.294 1228.8 647.373 1228.8C643.451 1228.8 639.922 1228.8 636 1228.8C633.255 1228.8 630.51 1228.8 627.765 1228.8C462.275 1226.45 313.647 1156.25 207.373 1044.88C207.373 1044.88 207.373 1044.49 206.98 1044.49C195.216 1033.9 205.412 977.431 252.863 941.745C312.471 896.647 455.216 868.412 455.216 868.412C455.216 868.412 510.51 859.392 715.608 902.137C835.608 927.235 926.98 963.706 977.961 1062.53C988.549 1082.92 999.137 1114.29 961.882 1130.76Z'
					fill='white'
				/>
				<path
					d='M716.785 897.823C792.079 913.118 872.471 929.588 934.432 979.392C955.216 996.255 968.942 1020.96 980.314 1044.88C985.804 1056.65 991.295 1068.8 995.608 1081.75C997.961 1090.37 1001.49 1100.18 999.53 1110.37C999.138 1113.12 996.785 1116.65 994.824 1118.61C985.804 1127.63 976 1133.12 966.197 1140.18C908.55 1180.18 842.275 1208.41 773.648 1223.31C620.706 1256.65 455.216 1230.76 320.706 1150.37C276.001 1123.31 234.824 1090.37 199.53 1051.55C195.608 1046.84 195.608 1039 195.608 1033.9C196.001 1022.14 199.138 1010.76 203.059 1000.18C212.471 975.863 224.628 951.549 245.412 934.686C260.314 924.49 276.393 915.863 292.863 908.804C344.628 886.843 399.138 871.549 455.216 865.274C459.922 864.882 460.706 871.549 456.001 872.333C402.275 883.314 348.942 899.784 299.138 922.137C281.099 931.157 261.883 939 247.373 953.118C233.648 968.02 223.844 986.451 216.001 1005.27C210.903 1016.65 207.373 1034.69 208.942 1043.71C233.648 1073.12 262.667 1099 294.04 1121.35C465.804 1241.35 726.589 1249.2 909.334 1149.2C925.804 1140.18 941.883 1129.98 957.177 1119.39C964.628 1114.29 972.471 1109.98 978.353 1104.1C978.746 1103.71 978.353 1104.1 978.353 1104.49C978.353 1104.88 977.961 1105.27 977.961 1105.27C978.353 1100.57 976.785 1094.29 974.824 1088.02C967.765 1065.27 956.393 1041.35 944.236 1020.57C925.02 989.588 892.471 969.98 859.53 954.294C836.785 943.706 812.863 935.471 788.549 927.627C764.236 919.784 739.53 913.118 714.824 907.235C708.55 905.667 710.51 896.647 716.785 897.823Z'
					fill='black'
				/>
				<path
					d='M1092.08 1373.9H100.312C100.312 1373.9 146.586 1224.1 181.488 1085.67C195.213 1031.55 220.704 957.824 252.076 936.256C295.213 906.452 366.586 889.589 398.743 878.216C421.096 870.373 438.351 867.628 454.429 863.314C454.429 865.275 454.821 866.844 454.821 868.805C454.821 868.805 490.508 948.805 600.704 993.118C690.508 1029.59 721.88 1015.08 730.115 974.687C735.213 948.805 748.155 942.922 739.919 929.197C735.213 925.275 732.076 919.393 730.508 913.511L727.37 900.569C734.821 899.001 741.88 897.04 748.939 894.687C751.292 893.903 753.253 893.118 755.606 892.334C799.135 917.04 859.135 924.883 931.684 978.216C944.625 987.628 982.272 1028.41 997.959 1127.63C1019.92 1258.22 1092.08 1373.9 1092.08 1373.9Z'
					fill='black'
				/>
				<path
					d='M1099.14 1377.82C804.627 1379 390.509 1382.92 100.313 1382.14C95.6075 1382.14 92.0781 1378.61 92.0781 1373.9C103.451 1325.27 121.882 1255.08 134.431 1206.06C144.235 1166.45 156.392 1122.14 166.196 1082.14C180.313 1029.98 197.96 962.137 242.274 927.627C256.784 918.216 272.862 911.549 288.157 905.667C321.882 893.118 356.392 883.706 390.902 873.117C410.509 865.667 432.47 860.961 452.862 855.078C457.176 853.902 461.49 856.255 462.666 860.176C463.059 861.353 463.059 866.451 463.451 867.627L455.215 860.176C458.353 860.176 461.49 862.137 462.666 864.882C465.804 871.549 470.117 878.608 474.431 884.882C516 944.882 583.059 983.314 652.862 1001.35C672.862 1005.67 699.529 1010.76 714.039 993.118C723.451 980.961 723.059 962.137 730.51 948.804C733.255 942.529 736.392 938.608 733.255 933.118L734.823 935.078C729.725 930.372 725.804 924.49 723.843 918.216C722.274 912.333 721.098 907.235 719.921 902.137C718.745 897.823 721.882 893.118 726.196 892.333C735.215 890.372 744.627 887.627 753.255 884.49C755.607 883.706 757.961 884.098 759.921 884.882C771.294 889.98 783.059 894.294 795.215 898.608C833.255 910.765 871.294 923.706 906.196 943.706C917.96 950.372 929.333 957.823 940.313 965.667C953.255 975.47 961.49 986.451 969.725 999.392C999.529 1046.06 1008.94 1099.78 1018.74 1153.12C1033.65 1222.14 1059.53 1288.8 1090.12 1352.33L1094.43 1360.96L1096.39 1365.27L1097.57 1367.24L1097.96 1368.41L1098.35 1368.8C1098.35 1368.41 1098.74 1369.2 1099.14 1370.37C1100.71 1373.12 1100.31 1376.25 1099.14 1377.82ZM1085.02 1369.98C1083.84 1371.55 1083.45 1374.29 1084.23 1376.25C1084.63 1377.43 1085.02 1378.22 1085.02 1377.82L1084.63 1377.43L1083.84 1376.25L1082.67 1374.29C1056.78 1329.98 1035.22 1283.31 1018.35 1235.08C1007.37 1203.71 998.353 1171.94 992.47 1139C985.411 1095.47 974.431 1049.98 950.902 1012.33C944.627 1002.53 936.784 991.941 927.372 984.882C916.784 977.431 906.196 969.98 895.215 963.706C873.255 950.372 849.725 939.784 825.804 930.372C801.882 920.568 776.392 913.117 752.47 899.392L759.137 899.784C749.725 903.314 739.921 906.059 729.725 908.019L736 898.216C738.353 906.843 738.745 917.039 745.804 922.921C750.117 927.627 752.078 935.863 750.902 942.529C749.725 948.412 747.372 952.333 745.804 955.863C742.274 963.314 739.921 969.588 738.353 977.823C724.627 1046.06 645.804 1019.78 601.098 1002.14C538.353 977.039 479.921 933.118 448.157 872.333L455.608 877.039C451.294 877.039 447.764 873.902 447.372 869.588L446.98 864.49L457.176 871.549C435.215 875.47 415.608 878.608 395.215 886.059C348.549 900.568 298.745 912.725 258.353 940.568C216.392 971.157 192.47 1079.78 179.137 1129.98C164.627 1185.27 149.333 1240.18 133.255 1294.69C125.019 1322.14 116.784 1349.2 108.157 1376.65L100.313 1366.06C385.019 1365.67 796.392 1367.63 1085.02 1369.98Z'
					fill='black'
				/>
				<path
					d='M694.43 1022.53C694.822 1022.92 694.822 1022.92 695.214 1023.32C695.214 1022.92 695.214 1022.53 695.214 1022.53C695.214 1022.53 694.822 1022.53 694.43 1022.53Z'
					fill='white'
				/>
				<path
					d='M788.158 877.04C788.158 877.04 788.158 839.393 755.217 829.59C694.433 811.158 579.531 802.923 502.668 802.923C502.668 802.923 470.119 805.276 458.354 811.158C446.982 816.648 433.256 820.178 430.119 845.668C428.55 858.217 428.55 878.217 428.942 895.864C429.335 919.393 438.746 942.139 455.217 959.001C481.492 986.06 536.001 1021.35 598.354 1031.94C748.55 1057.04 789.335 991.55 788.158 956.648C786.59 916.256 788.158 877.04 788.158 877.04Z'
					fill='black'
				/>
				<path
					d='M779.922 876.648C779.138 859.786 770.119 841.746 752.864 837.04C747.374 835.472 741.883 833.903 736.785 832.727C660.315 815.864 581.099 811.942 502.668 810.766C492.472 811.942 472.864 813.511 461.491 818.217C456.785 820.57 450.903 822.923 446.981 826.06C437.962 833.903 437.57 847.629 437.177 859.786C436.785 866.844 436.785 873.903 436.785 880.962C434.432 928.805 455.609 954.295 493.648 979.786C522.275 999.393 554.432 1013.51 588.55 1021.35C635.217 1030.37 686.981 1034.69 731.687 1016.65C755.217 1007.24 777.177 987.237 779.922 961.354C780.315 955.864 779.922 946.452 779.922 940.962C779.138 920.57 779.138 897.433 779.922 876.648ZM796.001 877.04C795.609 897.825 795.609 920.178 796.001 940.962C796.001 947.629 796.785 957.04 796.001 963.315C792.472 996.256 766.197 1020.96 737.57 1032.73C692.471 1051.55 642.275 1048.41 595.217 1040.96C585.021 1039 572.472 1036.26 562.668 1033.12C520.315 1019.39 480.707 997.433 448.942 966.06C426.197 943.707 417.57 912.335 419.53 881.354C420.707 858.609 416.785 831.55 435.609 813.903C441.491 809.197 447.373 806.452 453.648 803.707C469.726 797.433 485.413 796.256 501.883 794.688C554.824 795.08 607.766 797.825 660.707 804.099C692.079 808.021 723.844 812.335 754.432 821.354L756.785 822.138L759.53 823.315C773.256 829.982 779.138 844.491 786.981 856.256C792.079 862.531 795.609 869.197 796.001 877.04Z'
					fill='black'
				/>
				<path
					d='M431.686 895.472C440.313 1021.35 634.431 1155.86 749.725 1086.06C779.921 1065.67 788.156 1026.84 787.372 992.727C787.372 980.962 786.195 969.197 785.411 957.04C785.019 954.295 789.725 953.511 790.117 956.256C806.588 1022.14 798.352 1095.08 721.49 1114.69C613.646 1140.96 491.293 1061.75 443.842 966.844C432.862 944.884 425.803 920.57 425.411 896.256C425.803 892.335 431.293 891.55 431.686 895.472Z'
					fill='white'
				/>
				<path
					d='M753.646 1002.14C745.41 1042.53 692.077 1066.84 602.273 1030.37C508.94 992.726 468.548 902.922 458.352 876.255C513.646 772.726 475.214 700.961 475.214 700.961C602.665 689.981 714.038 839 714.038 839L731.293 912.726C732.861 919 735.999 924.491 740.704 928.412C748.94 942.922 758.744 976.255 753.646 1002.14Z'
					fill='white'
				/>
				<path
					d='M456.392 877.431C463.843 866.059 468.549 852.726 471.686 839.784C477.569 812.726 479.529 785.275 479.922 757.824V747.627C478.745 737.431 475.216 726.843 471.294 717.431C466.196 704.882 484.628 697.039 490.51 709.588C491.294 711.157 491.294 713.902 491.294 715.471C492.471 768.804 494.824 837.431 461.098 881.745C458.745 884.098 454.039 880.569 456.392 877.431Z'
					fill='black'
				/>
				<path
					d='M718.352 838.216C724.234 841.746 726.195 846.452 726.979 851.158C729.332 860.569 728.548 870.766 730.901 880.569C732.862 889.981 738.744 899.001 740.313 908.805C742.273 919.001 748.156 940.569 750.509 951.158C751.293 953.511 749.724 956.256 746.979 956.648C745.411 957.04 744.234 956.648 743.058 955.864C737.96 951.55 735.607 947.236 732.47 941.746C727.372 932.334 723.842 923.707 720.705 913.118C717.96 903.707 719.136 893.511 716.783 883.707C714.822 874.295 709.332 865.275 707.371 855.471C706.195 850.765 705.803 845.667 709.332 839.785C711.685 837.432 715.607 836.648 718.352 838.216Z'
					fill='black'
				/>
				<path
					d='M746.589 941.746C671.687 937.824 610.51 914.295 550.902 808.021C601.098 852.334 660.314 869.197 722.667 877.04L730.902 913.118C732.471 919.393 741.883 937.824 746.589 941.746Z'
					fill='black'
				/>
				<path
					d='M743.453 927.236C756.786 952.334 764.629 983.707 756.394 1011.55C750.119 1031.16 732.08 1045.67 712.472 1051.16C666.982 1063.31 614.433 1044.1 574.041 1022.53C524.237 994.687 487.374 948.02 463.845 897.04C462.276 893.118 467.766 889.981 470.119 893.903C478.355 910.373 487.766 926.452 498.355 940.962C508.943 955.864 521.1 969.589 534.825 981.746C574.825 1017.82 628.943 1040.18 683.061 1040.18C738.747 1038.61 759.923 1009.2 746.982 955.079C745.021 946.452 741.884 937.432 737.57 929.981C735.217 926.844 741.1 923.315 743.453 927.236Z'
					fill='black'
				/>
				<path
					d='M895.215 456.255C902.274 489.196 905.803 515.863 886.588 603.706C867.764 691.157 913.646 709.196 805.019 849.196C760.705 906.451 653.254 890.372 566.195 831.157C536.784 811.157 524.235 759.784 502.274 723.313C485.019 694.686 477.176 724.49 454.431 699.784C423.45 666.059 386.195 598.215 404.627 478.215C434.431 283.706 588.548 260.961 702.666 282.529C817.568 304.49 876.392 369.588 895.215 456.255Z'
					fill='white'
				/>
				<path
					d='M474.039 734.686C465.019 719.392 453.255 706.059 442.274 691.941C431.686 677.432 423.059 661.353 416 644.883C369.333 530.373 387.372 369.196 501.882 301.745C549.333 274.294 606.588 267.628 659.921 271.941C774.039 280.177 878.745 332.726 903.451 453.51C916.784 506.843 898.745 561.745 888.549 613.902C883.843 639.785 887.764 666.451 887.372 693.118C886.98 720.177 879.529 747.235 869.333 772.333C863.059 789.588 852.078 804.883 840.706 819C821.882 841.745 803.059 864.883 779.137 882.53C773.647 886.451 763.843 888.412 757.176 889.196C738.745 891.941 720.706 892.726 702.274 891.549C630.117 888.412 552.862 853.51 523.843 783.706C522.666 780.961 526.588 779 528.157 781.353C565.804 840.961 634.823 870.373 703.451 874.294C724.627 875.471 746.196 875.079 766.98 870.765C777.176 865.667 786.196 856.647 794.823 848.412C816 827.235 837.568 804.49 852.862 778.608C871.294 743.706 881.49 705.667 878.353 666.059C877.568 648.412 877.176 629.981 880.706 612.333C883.843 594.686 887.764 577.824 890.117 559.785C892.47 542.53 893.647 524.883 893.647 507.628C891.686 457.039 875.215 404.883 843.059 365.667C772.078 277.432 604.235 254.294 509.725 314.686C450.117 351.549 422.274 420.569 413.255 487.628C399.529 568.02 403.451 647.235 467.372 705.667L486.196 725.275C493.647 733.902 480.313 744.098 474.039 734.686Z'
					fill='black'
				/>
				<path
					d='M520.312 609.98C520.312 609.98 508.155 551.156 450.9 558.215C401.488 564.489 384.233 682.921 496.39 715.862'
					fill='white'
				/>
				<path
					d='M491.294 664.49C482.274 659.392 476 650.765 475.608 640.176C476 632.333 477.176 623.314 475.216 615.471C474.039 608.02 466.196 606.059 460.314 606.451C454.039 607.627 450.118 615.471 448.941 621.745C448.941 622.137 448.549 623.314 448.549 623.706C448.157 625.667 445.02 625.667 444.235 623.706C439.137 608.412 450.51 591.549 466.98 593.51C490.118 595.078 493.255 619.392 488.941 637.823C486.588 645.667 489.725 652.725 494.039 659.392L494.824 660.569C496.784 662.922 493.647 666.059 491.294 664.49Z'
					fill='black'
				/>
				<path
					d='M805.018 568.412C810.901 596.255 821.881 622.137 835.607 646.451C847.763 676.255 816.391 704.49 788.548 703.314C785.411 703.314 785.018 699 787.763 698.216C805.411 692.726 821.489 680.961 824.234 662.922C825.411 657.432 823.842 652.726 821.097 648.02C808.156 623.706 800.312 595.863 802.273 568.412C802.273 566.451 805.018 566.451 805.018 568.412Z'
					fill='black'
				/>
				<path
					d='M518.353 610.373C509.333 587.235 489.725 565.275 463.451 565.667C461.098 565.275 457.176 566.059 454.823 566.059C448.156 566.451 442.666 568.804 437.568 573.51C412.47 598.608 416.784 642.922 437.176 670.765C444.235 680.569 453.254 689.196 463.451 696.255C473.647 703.314 485.019 708.804 497.176 713.51C499.921 714.294 498.745 718.608 496 718.216C469.725 712.726 444.627 699.784 427.372 678.216C400.705 646.059 395.215 592.333 426.98 560.961C434.039 554.686 443.843 549.98 453.647 549.98C456.784 549.98 461.49 549.196 464.627 549.98C481.098 550.765 496.784 559 506.98 571.941C516 582.922 521.098 596.255 522.666 609.588C522.666 611.941 519.137 612.726 518.353 610.373Z'
					fill='black'
				/>
				<path
					d='M766.195 740.961C766.587 753.902 747.371 786.844 710.509 771.549C674.822 757.04 664.234 688.804 715.214 721.353C741.097 738.608 757.567 741.353 766.195 740.961Z'
					fill='white'
				/>
				<path
					d='M774.43 741.353C763.842 744.882 753.646 741.745 743.842 738.216C729.332 733.118 717.567 723.706 703.842 717.039C685.018 708.02 677.567 720.176 682.665 737.824C687.763 756.647 704.234 773.118 724.626 773.902C742.665 775.863 761.881 759.392 760.313 740.961C758.744 733.118 770.116 730.765 772.077 738.216C771.685 751.549 763.45 760.961 754.822 768.804C737.567 782.922 711.293 779.784 694.038 766.843C680.705 756.255 669.724 739.392 672.077 721.353C672.862 713.51 680.312 704.49 688.548 704.098C707.763 702.529 719.136 715.471 734.038 724.098C745.803 730.765 759.136 739 772.862 737.824C775.214 737.039 776.783 740.177 774.43 741.353Z'
					fill='black'
				/>
				<path
					d='M683.447 726.843C689.722 735.863 699.526 740.569 709.722 742.922C712.075 743.706 714.036 743.706 715.996 743.706C719.526 743.706 723.055 746.451 725.016 748.412C734.428 755.863 747.369 757.039 759.134 757.431C761.879 757.431 761.879 762.137 759.134 761.745C746.585 760.961 733.251 759.784 721.487 753.902C719.134 753.118 717.957 752.333 715.996 752.333C708.545 753.118 702.663 748.412 697.173 745.274C690.898 741.745 684.624 738.216 677.173 736.647C673.644 735.863 671.683 732.725 672.075 729.196C672.859 723.706 680.702 722.137 683.447 726.843Z'
					fill='black'
				/>
				<path
					d='M716.391 526.844C725.018 528.02 731.685 519.001 728.547 510.373C726.979 505.667 724.234 501.354 719.92 498.609C706.587 490.373 656.783 489.589 630.508 508.413C606.979 525.667 677.175 521.354 716.391 526.844Z'
					fill='black'
				/>
				<path
					d='M825.018 531.157C817.959 531.157 813.645 522.138 817.175 514.687C819.135 510.765 821.881 507.236 825.802 505.275C837.959 499.393 870.508 502.922 885.018 522.922C897.959 540.569 857.567 530.765 825.018 531.157Z'
					fill='black'
				/>
				<path
					d='M703.451 578.609C689.725 590.765 668.549 590.765 652.078 584.491C649.333 583.315 633.647 576.256 636.784 572.334C637.176 571.942 637.96 571.55 638.353 571.55C649.333 571.942 659.529 573.118 670.117 573.903C680.705 574.687 690.117 574.295 701.098 573.903C703.843 573.903 705.411 577.04 703.451 578.609Z'
					fill='black'
				/>
				<path
					d='M858.351 585.275C845.802 599.785 820.312 597.824 808.547 583.706C807.371 582.53 808.547 580.177 810.116 580.569C814.43 580.961 818.351 581.745 822.273 582.138C834.037 584.098 843.841 583.706 856.39 583.314C858.351 582.53 859.135 584.491 858.351 585.275Z'
					fill='black'
				/>
				<path
					d='M926.98 396.254C953.646 373.117 992.862 338.215 952.47 289.588C912.078 240.96 837.568 259.784 837.568 259.784C837.568 259.784 853.254 215.078 809.725 199C757.176 179.784 608.156 237.823 608.156 237.823C597.176 237.431 586.588 237.039 576.784 237.039C448.156 234.294 410.901 315.47 409.333 388.411C409.333 388.411 365.803 402.921 354.823 472.333C351.294 494.686 347.764 523.313 356.392 557.823C379.529 651.941 441.882 717.431 481.49 750.764C496.392 739.784 470.117 724.49 472.078 706.451C386.98 664.882 405.411 564.098 450.901 558.215C485.803 553.901 504.235 574.294 512.862 590.764C516.392 595.47 469.333 333.117 740.705 419C794.431 435.862 849.725 450.764 887.372 423.705C891.686 431.941 894.431 441.745 895.215 456.254C895.215 456.254 960.705 430.764 950.901 404.098C947.764 395.078 926.98 396.254 926.98 396.254Z'
					fill='black'
				/>
			</g>
		</svg>
	)
}
