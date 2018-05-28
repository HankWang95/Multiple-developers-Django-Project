$(function tab() {
    $('#reportTableC').bootstrapTable({
        method: 'get',
        cache: false,
        height: 800,
        striped: false,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [20, 50, 100, 200],
        search: true,
        showColumns: false,
        showRefresh: false,
        showExport: true,
        exportTypes: ['csv','txt','xml'],
        search: true,
        clickToSelect: true,
        columns: [{field:"mt_name",title:"医疗项目名称",align:"center",valign:"middle",sortable:"true"},{field:"mt_type",title:"医疗类型",align:"center",valign:"middle",sortable:"true"},{field:"mt_examine_max",title:"诊疗给付上限",align:"center",valign:"middle",sortable:"true"},{field:"mt_test_max",title:"检验给付上限",align:"center",valign:"middle",sortable:"true"},{field:"mt_hocus_max",title:"麻醉给付上限",align:"center",valign:"middle",sortable:"true"},{field:"mt_sum_max",title:"总计给付上限",align:"center",valign:"middle",sortable:"true"}],
        data : [
            {
                "mt_name": "郁血性心衰竭",
                "mt_type": "心脏-内科(循环系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2370"
            },
            {
                "mt_name": "心瓣膜疾病",
                "mt_type": "心脏-内科(循环系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2370"
            },
            {
                "mt_name": "输血",
                "mt_type": "血液-内科(血液及淋巴系统)",
                "mt_examine_max": "1800",
                "mt_test_max": "",
                "mt_hocus_max": "",
                "mt_sum_max": "1800"
            },
            {
                "mt_name": "淋巴肉瘤",
                "mt_type": "淋巴-外科(血液及淋巴系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "脾切除术",
                "mt_type": "脾脏-外科(血液及淋巴系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "脾肿瘤",
                "mt_type": "脾脏-外科(血液及淋巴系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "创伤",
                "mt_type": "口腔-外科(消化系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3020"
            },
            {
                "mt_name": "舌撕裂伤",
                "mt_type": "口腔-外科(消化系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "异物-内视镜",
                "mt_type": "食道-外科(消化系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3020"
            },
            {
                "mt_name": "异物",
                "mt_type": "食道-外科(消化系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "食道肿瘤",
                "mt_type": "食道-外科(消化系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "腹膜炎",
                "mt_type": "腹壁-内科(消化系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2150"
            },
            {
                "mt_name": "腹膜炎-引流灌洗",
                "mt_type": "腹壁-外科(消化系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3900"
            },
            {
                "mt_name": "创伤性疝气",
                "mt_type": "腹壁-外科(消化系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4800"
            },
            {
                "mt_name": "异物",
                "mt_type": "胃-内科(消化系统)",
                "mt_examine_max": "800",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "1450"
            },
            {
                "mt_name": "胃炎",
                "mt_type": "胃-内科(消化系统)",
                "mt_examine_max": "1300",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "1950"
            },
            {
                "mt_name": "出血性胃肠炎",
                "mt_type": "胃-内科(消化系统)",
                "mt_examine_max": "1700",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2350"
            },
            {
                "mt_name": "异物",
                "mt_type": "胃-外科(消化系统)",
                "mt_examine_max": "2200",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3500"
            },
            {
                "mt_name": "胃扭转",
                "mt_type": "胃-外科(消化系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4820"
            },
            {
                "mt_name": "胃肿瘤",
                "mt_type": "胃-外科(消化系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4820"
            },
            {
                "mt_name": "肠炎",
                "mt_type": "小肠-内科(消化系统)",
                "mt_examine_max": "肠炎",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "1950"
            },
            {
                "mt_name": "异物",
                "mt_type": "小肠-外科(消化系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3900"
            },
            {
                "mt_name": "肠套迭",
                "mt_type": "小肠-外科(消化系统)",
                "mt_examine_max": "3150",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4670"
            },
            {
                "mt_name": "肠吻合术",
                "mt_type": "小肠-外科(消化系统)",
                "mt_examine_max": "3650",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4950"
            },
            {
                "mt_name": "直肠脱垂-荷包缝合法",
                "mt_type": "大肠-外科(消化系统)",
                "mt_examine_max": "1100",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2400"
            },
            {
                "mt_name": "胰脏炎",
                "mt_type": "胰脏外分泌-内科(消化系统)",
                "mt_examine_max": "1650",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "肝炎",
                "mt_type": "肝脏-内科(消化系统)",
                "mt_examine_max": "1700",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2350"
            },
            {
                "mt_name": "肝肿瘤",
                "mt_type": "肝脏-外科(消化系统)",
                "mt_examine_max": "3650",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4950"
            },
            {
                "mt_name": "创伤",
                "mt_type": "肝脏-外科(消化系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4600"
            },
            {
                "mt_name": "肺炎",
                "mt_type": "胸腔-内科(呼吸系统)",
                "mt_examine_max": "1650",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "肺水肿",
                "mt_type": "胸腔-内科(呼吸系统)",
                "mt_examine_max": "1750",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2400"
            },
            {
                "mt_name": "创伤",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "2100",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3400"
            },
            {
                "mt_name": "胸水-引流",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3900"
            },
            {
                "mt_name": "胸部肿瘤-切除",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "4400",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "5700"
            },
            {
                "mt_name": "横膈疝气-修补",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5020"
            },
            {
                "mt_name": "气胸-修复",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "2200",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3720"
            },
            {
                "mt_name": "异物-取出",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "3700",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3720"
            },
            {
                "mt_name": "脓胸-引流",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "2500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4020"
            },
            {
                "mt_name": "乳糜胸-引流",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "2500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4020"
            },
            {
                "mt_name": "胸引流管-置入引流管",
                "mt_type": "胸腔-外科(呼吸系统)",
                "mt_examine_max": "1350",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "2870"
            },
            {
                "mt_name": "子宫蓄脓-子宫卵巢切除术",
                "mt_type": "子宫-外科(生殖系统)",
                "mt_examine_max": "2200",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3720"
            },
            {
                "mt_name": "会阴疝气",
                "mt_type": "会阴部-外科(生殖系统)",
                "mt_examine_max": "2900",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4420"
            },
            {
                "mt_name": "乳房切除术 (部分)",
                "mt_type": "乳腺-外科(生殖系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "乳房切除术 (完全)",
                "mt_type": "乳腺-外科(生殖系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3900"
            },
            {
                "mt_name": "睪丸肿瘤",
                "mt_type": "睪丸-外科(生殖系统)",
                "mt_examine_max": "1300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2600"
            },
            {
                "mt_name": "前列腺肿瘤",
                "mt_type": "前列腺-外科(生殖系统)",
                "mt_examine_max": "1350",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "2870"
            },
            {
                "mt_name": "前列腺炎-睪丸摘除术",
                "mt_type": "前列腺-外科(生殖系统)",
                "mt_examine_max": "800",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2100"
            },
            {
                "mt_name": "肾结石",
                "mt_type": "肾脏-内科(泌尿系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "1870"
            },
            {
                "mt_name": "肾病症候群",
                "mt_type": "肾脏-内科(泌尿系统)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "慢性肾衰竭",
                "mt_type": "肾脏-内科(泌尿系统)",
                "mt_examine_max": "2800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "3670"
            },
            {
                "mt_name": "急性肾衰竭",
                "mt_type": "肾脏-内科(泌尿系统)",
                "mt_examine_max": "2800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "3670"
            },
            {
                "mt_name": "尿毒",
                "mt_type": "肾脏-内科(泌尿系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "4170"
            },
            {
                "mt_name": "肾切除术",
                "mt_type": "肾脏-外科(泌尿系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4820"
            },
            {
                "mt_name": "尿石症",
                "mt_type": "膀胱-内科(泌尿系统)",
                "mt_examine_max": "1250",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2120"
            },
            {
                "mt_name": "尿石症-取出",
                "mt_type": "膀胱-外科(泌尿系统)",
                "mt_examine_max": "2400",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3920"
            },
            {
                "mt_name": "猫下泌尿道症候群-导尿",
                "mt_type": "膀胱-外科(泌尿系统)",
                "mt_examine_max": "1300",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "2820"
            },
            {
                "mt_name": "椎间盘疾病",
                "mt_type": "椎间盘-内科(神经系统)",
                "mt_examine_max": "870",
                "mt_test_max": "1300",
                "mt_hocus_max": "",
                "mt_sum_max": "2170"
            },
            {
                "mt_name": "椎体开窗术",
                "mt_type": "椎间盘-外科(神经系统)",
                "mt_examine_max": "4700",
                "mt_test_max": "1300",
                "mt_hocus_max": "650",
                "mt_sum_max": "6650"
            },
            {
                "mt_name": "椎板切除术",
                "mt_type": "椎间盘-外科(神经系统)",
                "mt_examine_max": "6500",
                "mt_test_max": "1300",
                "mt_hocus_max": "650",
                "mt_sum_max": "8450"
            },
            {
                "mt_name": "创伤",
                "mt_type": "椎间盘-外科(神经系统)",
                "mt_examine_max": "1300",
                "mt_test_max": "1300",
                "mt_hocus_max": "650",
                "mt_sum_max": "3250"
            },
            {
                "mt_name": "十字韧带断裂",
                "mt_type": "膝盖骨-内科(肌肉骨骼系统)",
                "mt_examine_max": "1100",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "1750"
            },
            {
                "mt_name": "十字韧带断裂",
                "mt_type": "膝盖骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "6300"
            },
            {
                "mt_name": "肘关节脱臼-非侵入性覆位",
                "mt_type": "肘关节-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3020"
            },
            {
                "mt_name": "肘关节脱臼",
                "mt_type": "肘关节-外科(肌肉骨骼系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5020"
            },
            {
                "mt_name": "髋关节脱臼-非侵入性覆位",
                "mt_type": "髋关节-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3020"
            },
            {
                "mt_name": "髋关节脱臼",
                "mt_type": "髋关节-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "6520"
            },
            {
                "mt_name": "骨髓炎",
                "mt_type": "长骨-内科(肌肉骨骼系统)",
                "mt_examine_max": "1800",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2450"
            },
            {
                "mt_name": "骨髓炎-引流清创",
                "mt_type": "长骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "1300",
                "mt_hocus_max": "650",
                "mt_sum_max": "5450"
            },
            {
                "mt_name": "截前肢",
                "mt_type": "长骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4600"
            },
            {
                "mt_name": "截后肢",
                "mt_type": "长骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4600"
            },
            {
                "mt_name": "肩膀脱臼",
                "mt_type": "肩膀-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "6300"
            },
            {
                "mt_name": "绷带包扎固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "钢丝内固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "钢钉内固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "6520"
            },
            {
                "mt_name": "绷带包扎固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "夹板固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "900",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2200"
            },
            {
                "mt_name": "石膏固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "钢钉内固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3150",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4670"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "住院观察",
                "mt_type": "骨盆、脊椎-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1300",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "1950"
            },
            {
                "mt_name": "钢钉/钢丝/螺丝内固定",
                "mt_type": "骨盆、脊椎-外科(肌肉骨骼系统)",
                "mt_examine_max": "4700",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "6220"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "骨盆、脊椎-外科(肌肉骨骼系统)",
                "mt_examine_max": "6000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "7520"
            },
            {
                "mt_name": "绷带包扎固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "石膏固定或夹板固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1200",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2500"
            },
            {
                "mt_name": "钢钉/钢丝/螺丝内固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3150",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4670"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "糖尿病",
                "mt_type": "胰脏-内科(内分泌系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "3470"
            },
            {
                "mt_name": "撕裂伤或咬伤-清创",
                "mt_type": "伤口-外科(皮肤科)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "脓疡或肉芽肿- 清除",
                "mt_type": "伤口-外科(皮肤科)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "烧烫伤-清创",
                "mt_type": "伤口-外科(皮肤科)",
                "mt_examine_max": "1200",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2500"
            },
            {
                "mt_name": "角膜溃疡",
                "mt_type": "眼球-内科(眼科)",
                "mt_examine_max": "1100",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2400"
            },
            {
                "mt_name": "白内障",
                "mt_type": "眼球-内科(眼科)",
                "mt_examine_max": "1200",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "1750"
            },
            {
                "mt_name": "角膜溃疡",
                "mt_type": "眼球-外科(眼科)",
                "mt_examine_max": "3000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4300"
            },
            {
                "mt_name": "后弹力层脱出",
                "mt_type": "眼球-外科(眼科)",
                "mt_examine_max": "6000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "7300"
            },
            {
                "mt_name": "白内障",
                "mt_type": "眼球-外科(眼科)",
                "mt_examine_max": "6000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "7300"
            },
            {
                "mt_name": "水晶体脱位",
                "mt_type": "眼球-外科(眼科)",
                "mt_examine_max": "6000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "7300"
            },
            {
                "mt_name": "眼球突出",
                "mt_type": "眼球-外科(眼科)",
                "mt_examine_max": "2000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3300"
            },
            {
                "mt_name": "水晶体植入",
                "mt_type": "眼球-外科(眼科)",
                "mt_examine_max": "4400",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "5700"
            },
            {
                "mt_name": "耳血肿",
                "mt_type": "耳廓-外科(耳鼻喉科)",
                "mt_examine_max": "1300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2600"
            },
            {
                "mt_name": "垂直耳道壁切除术",
                "mt_type": "耳道-外科(耳鼻喉科)",
                "mt_examine_max": "2000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3300"
            },
            {
                "mt_name": "耳道摘除术",
                "mt_type": "耳道-外科(耳鼻喉科)",
                "mt_examine_max": "3100",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4400"
            },
            {
                "mt_name": "耳道肿瘤",
                "mt_type": "耳道-外科(耳鼻喉科)",
                "mt_examine_max": "3100",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4400"
            },
            {
                "mt_name": "有机磷(氨基甲酸脂类)",
                "mt_type": "中毒-内科(物理化学性伤害)",
                "mt_examine_max": "1500",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2150"
            },
            {
                "mt_name": "杀鼠剂",
                "mt_type": "中毒-内科(物理化学性伤害)",
                "mt_examine_max": "1500",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2150"
            },

            {
                "mt_name": "蛇咬伤",
                "mt_type": "物理性伤害-内科(物理化学性伤害)",
                "mt_examine_max": "2200",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2850"
            },
            {
                "mt_name": "中暑",
                "mt_type": "物理性伤害-内科(物理化学性伤害)",
                "mt_examine_max": "1800",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2450"
            },
            {
                "mt_name": "触电",
                "mt_type": "物理性伤害-内科(物理化学性伤害)",
                "mt_examine_max": "1800",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2450"
            },
            {
                "mt_name": "犬细小病毒感染",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "犬冠状病毒感染",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "犬瘟热",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "猫白血病",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "猫艾滋病",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "猫瘟热",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "猫冠状病毒感染",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "血巴东虫症(猫传染性贫血)",
                "mt_type": "细菌-内科(传染病)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2370"
            },
            {
                "mt_name": "犬艾利希体症(立克次体)",
                "mt_type": "细菌-内科(传染病)",
                "mt_examine_max": "1500",
                "mt_test_max": "",
                "mt_hocus_max": "",
                "mt_sum_max": "1500"
            },
            {
                "mt_name": "莱姆病",
                "mt_type": "细菌-内科(传染病)",
                "mt_examine_max": "1200",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2070"
            }
        ],
        onPageChange: function (size, number) {
            //$("#pageSizeInput").val(size);
            //$("#pageNumberInput").val(number);

            //var form = $('#tableForm');
            //form.action= '${base}/showReport';
            //form.submit();
        },
        //onSort: function (name, order) {
        // },
        //formatShowingRows: function (pageFrom, pageTo, totalRows) {
        //	return '';
        // },
        //formatRecordsPerPage: function () {
        //	return '';
        //  },
        formatNoMatches: function(){
            return '无内容/请重试';
        }
    });

    $(window).resize(function () {
        $('#reportTableC').bootstrapTable('resetView');
    });
});
$(function () {
    $('#reportTableA').bootstrapTable({
        method: 'get',
        cache: false,
        height: 850,
        striped: false,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [20, 50, 100, 200],
        search: true,
        showColumns: false,
        showRefresh: false,
        showExport: true,
        exportTypes: ['csv','txt','xml'],
        clickToSelect: true,
        columns: [{field:"mt_name",title:"医疗项目名称",align:"center",valign:"middle",sortable:"true"},{field:"mt_type",title:"医疗类型",align:"center",valign:"middle",sortable:"true"},{field:"mt_examine_max",title:"诊疗给付上限",align:"center",valign:"middle",sortable:"true"},{field:"mt_test_max",title:"检验给付上限",align:"center",valign:"middle",sortable:"true"},{field:"mt_hocus_max",title:"麻醉给付上限",align:"center",valign:"middle",sortable:"true"},{field:"mt_sum_max",title:"总计给付上限",align:"center",valign:"middle",sortable:"true"}],
        data : [
            {
                "mt_name": "舌撕裂伤",
                "mt_type": "口腔-外科(消化系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "异物-内视镜",
                "mt_type": "食道-外科(消化系统)",
                "mt_examine_max": "1500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "3020"
            },
            {
                "mt_name": "异物",
                "mt_type": "食道-外科(消化系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "腹膜炎-引流灌洗",
                "mt_type": "腹壁-外科(消化系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3900"
            },
            {
                "mt_name": "创伤性疝气",
                "mt_type": "腹壁-外科(消化系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4800"
            },
            {
                "mt_name": "异物",
                "mt_type": "胃-外科(消化系统)",
                "mt_examine_max": "2200",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3500"
            },
            {
                "mt_name": "胃扭转",
                "mt_type": "胃-外科(消化系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4820"
            },
            {
                "mt_name": "异物",
                "mt_type": "小肠-外科(消化系统)",
                "mt_examine_max": "2600",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "3900"
            },
            {
                "mt_name": "肠套迭",
                "mt_type": "小肠-外科(消化系统)",
                "mt_examine_max": "3150",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4670"
            },
            {
                "mt_name": "直肠脱垂-荷包缝合法",
                "mt_type": "大肠-外科(消化系统)",
                "mt_examine_max": "1100",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2400"
            },
            {
                "mt_name": "十字韧带断裂",
                "mt_type": "膝盖骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "6300"
            },
            {
                "mt_name": "肘关节脱臼",
                "mt_type": "肘关节-外科(肌肉骨骼系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5020"
            },
            {
                "mt_name": "髋关节脱臼",
                "mt_type": "髋关节-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "6520"
            },
            {
                "mt_name": "骨髓炎-引流清创",
                "mt_type": "长骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3500",
                "mt_test_max": "1300",
                "mt_hocus_max": "650",
                "mt_sum_max": "5450"
            },
            {
                "mt_name": "截前肢",
                "mt_type": "长骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4600"
            },
            {
                "mt_name": "截后肢",
                "mt_type": "长骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3300",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "4600"
            },
            {
                "mt_name": "肩膀脱臼",
                "mt_type": "肩膀-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "6300"
            },
            {
                "mt_name": "钢丝内固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "钢钉内固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4520"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "颅骨、颌骨、肩胛骨、肋骨、髌骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "5000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "6520"
            },
            {
                "mt_name": "钢钉内固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3150",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4670"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "肱骨、股骨、桡骨、尺骨、胫骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "钢钉/钢丝/螺丝内固定",
                "mt_type": "骨盆、脊椎-外科(肌肉骨骼系统)",
                "mt_examine_max": "4700",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "6220"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "骨盆、脊椎-外科(肌肉骨骼系统)",
                "mt_examine_max": "6000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "7520"
            },
            {
                "mt_name": "绷带包扎固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "石膏固定或夹板固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-非手术(肌肉骨骼系统)",
                "mt_examine_max": "1200",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2500"
            },
            {
                "mt_name": "钢钉/钢丝/螺丝内固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "3150",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "4670"
            },
            {
                "mt_name": "骨板内固定",
                "mt_type": "腕骨、掌骨、踝骨、跖骨、趾骨-外科(肌肉骨骼系统)",
                "mt_examine_max": "4000",
                "mt_test_max": "870",
                "mt_hocus_max": "650",
                "mt_sum_max": "5520"
            },
            {
                "mt_name": "撕裂伤或咬伤-清创",
                "mt_type": "伤口-外科(皮肤科)",
                "mt_examine_max": "1000",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2300"
            },
            {
                "mt_name": "烧烫伤-清创",
                "mt_type": "伤口-外科(皮肤科)",
                "mt_examine_max": "1200",
                "mt_test_max": "650",
                "mt_hocus_max": "650",
                "mt_sum_max": "2500"
            },
            {
                "mt_name": "有机磷(氨基甲酸脂类)",
                "mt_type": "中毒-内科(物理化学性伤害)",
                "mt_examine_max": "1500",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2150"
            },
            {
                "mt_name": "杀鼠剂",
                "mt_type": "中毒-内科(物理化学性伤害)",
                "mt_examine_max": "1500",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2150"
            },

            {
                "mt_name": "蛇咬伤",
                "mt_type": "物理性伤害-内科(物理化学性伤害)",
                "mt_examine_max": "2200",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2850"
            },
            {
                "mt_name": "中暑",
                "mt_type": "物理性伤害-内科(物理化学性伤害)",
                "mt_examine_max": "1800",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2450"
            },
            {
                "mt_name": "触电",
                "mt_type": "物理性伤害-内科(物理化学性伤害)",
                "mt_examine_max": "1800",
                "mt_test_max": "650",
                "mt_hocus_max": "",
                "mt_sum_max": "2450"
            },
            {
                "mt_name": "犬细小病毒感染",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "犬冠状病毒感染",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "犬瘟热",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "猫瘟热",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            },
            {
                "mt_name": "猫冠状病毒感染",
                "mt_type": "病毒-内科(传染病)",
                "mt_examine_max": "1800",
                "mt_test_max": "870",
                "mt_hocus_max": "",
                "mt_sum_max": "2670"
            }
        ],
        onPageChange: function (size, number) {
            //$("#pageSizeInput").val(size);
            //$("#pageNumberInput").val(number);

            //var form = $('#tableForm');
            //form.action= '${base}/showReport';
            //form.submit();
        },
        //onSort: function (name, order) {
        // },
        //formatShowingRows: function (pageFrom, pageTo, totalRows) {
        //	return '';
        // },
        //formatRecordsPerPage: function () {
        //	return '';
        //  },
        formatNoMatches: function(){
            return '无内容/请重试';
        }
    });
    $(window).resize(function () {
        $('#reportTableA').bootstrapTable('resetView');
    });
});
$(function () {
    $('#reportTableH').bootstrapTable({
        method: 'get',
        cache: false,
        height: 800,
        striped: false,
        pagination: true,
        pageSize: 20,
        pageNumber:1,
        pageList: [20, 50, 100, 200],
        search: true,
        showColumns: false,
        showRefresh: false,
        showExport: true,
        exportTypes: ['csv','txt','xml'],
        search: true,
        clickToSelect: true,
        columns: [{field:"hos_name",title:"合作定点医院名称",align:"center",valign:"middle",sortable:"true"},{field:"hos_province",title:"所在省份",align:"center",valign:"middle",sortable:"true"},{field:"hos_city",title:"所在市",align:"center",valign:"middle",sortable:"true"},{field:"hos_area",title:"所在地区",align:"center",valign:"middle",sortable:"true"}],
        data : [
            {
                "hos_name": "长江动物医院开发区分院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "经济技术开发区"
            },
            {
                "hos_name": "瑞派至诚天河院（微创中心）",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "天河区"
            },
            {
                "hos_name": "立德动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "天河区"
            },
            {
                "hos_name": "嘉宠动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "天河区"
            },
            {
                "hos_name": "YY动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "越秀区"
            },
            {
                "hos_name": "方舟动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "越秀区"
            },
            {
                "hos_name": "瑞派光景德政北院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "越秀区"
            },
            {
                "hos_name": "瑞派光景猫专科",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "越秀区"
            },
            {
                "hos_name": "多杰宠物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "番禺区"
            },
            {
                "hos_name": "泰迪动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "番禺区"
            },
            {
                "hos_name": "拾米动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "YY动物医院（新港西路）",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派至诚江南西院（异宠专科）",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派光景新港西院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派光景宝岗院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派光景江南中院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派吉太郎怡乐中路院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派吉太郎千禧院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派博威海珠院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "海珠区"
            },
            {
                "hos_name": "瑞派光景中山七院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "荔湾区"
            },
            {
                "hos_name": "雷米高动物医院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "白云区"
            },
            {
                "hos_name": "瑞派博威白云院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "白云区"
            },
            {
                "hos_name": "瑞派吉旺白云院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "白云区"
            },
            {
                "hos_name": "方舟动物医院（白云区）",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "白云区"
            },
            {
                "hos_name": "瑞派博威增城院",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "增城区"
            },
            {
                "hos_name": "瑞派至诚佛山同济院（佛山骨病中心）",
                "hos_province": "广东省",
                "hos_city": "佛山市",
                "hos_area": "禅城区"
            },
            {
                "hos_name": "瑞派至诚佛山乐从院",
                "hos_province": "广东省",
                "hos_city": "佛山市",
                "hos_area": "顺德区"
            },
            {
                "hos_name": "瑞派粤宠佛山桂园东院",
                "hos_province": "广东省",
                "hos_city": "佛山市",
                "hos_area": "禅城区"
            },
            {
                "hos_name": "瑞派粤宠佛山季华七院",
                "hos_province": "广东省",
                "hos_city": "佛山市",
                "hos_area": "南海区"
            },
            {
                "hos_name": "瑞派福华岗厦院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派福华沙嘴院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派皇家时代广场院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派皇家景田院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派皇家梅林院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派澳洲香蜜湖院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派来福康宠物医院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "福田区"
            },
            {
                "hos_name": "瑞派皇家文锦院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "罗湖区"
            },
            {
                "hos_name": "瑞派澳洲龙华院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "宝安区"
            },
            {
                "hos_name": "瑞派福华龙华院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "宝安区"
            },
            {
                "hos_name": "瑞派皇家新安院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "宝安区"
            },
            {
                "hos_name": "瑞派科普动物医院宝安店",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "宝安区"
            },
            {
                "hos_name": "瑞派澳洲侨城院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "瑞派福华南山院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "瑞派康德南头院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "瑞派皇家西部院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "瑞派康德西丽院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "瑞派鲲鹏宠物医院南山院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "瑞派佰佳布吉院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "龙岗区"
            },
            {
                "hos_name": "瑞派佰佳桂芳园院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "龙岗区"
            },
            {
                "hos_name": "瑞派佰佳紫薇院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "龙岗区"
            },
            {
                "hos_name": "瑞派皇家布吉院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "龙岗区"
            },
            {
                "hos_name": "瑞派康德盐田院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "盐田区"
            },
            {
                "hos_name": "新宠乐宠物医院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "东城区"
            },
            {
                "hos_name": "宠友宠物医院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "东城区"
            },
            {
                "hos_name": "守望者动物医院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "东城区"
            },
            {
                "hos_name": "知己宠物医院",
                "hos_province": "广东省",
                "hos_city": "东莞市",
                "hos_area": "大岭山镇"
            },
            {
                "hos_name": "东东动物医院",
                "hos_province": "广东省",
                "hos_city": "东莞市",
                "hos_area": "虎门镇"
            },
            {
                "hos_name": "罗医生宠物诊疗医院",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "石岐区"
            },
            {
                "hos_name": "小榄佳佳动物诊所",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "小榄镇"
            },
            {
                "hos_name": "坦洲渲嗳动物医院",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "坦洲镇"
            },
            {
                "hos_name": "黄圃镇宠爱动物医院",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "黄圃镇"
            },
            {
                "hos_name": "石岐区广悦宠物医院",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "石岐区"
            },
            {
                "hos_name": "石岐区一方宠物医院",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "石岐区"
            },
            {
                "hos_name": "奥宝动物医院",
                "hos_province": "广东省",
                "hos_city": "中山市",
                "hos_area": "东凤镇"
            },
            {
                "hos_name": "至诚动物医院",
                "hos_province": "广东省",
                "hos_city": "韶关市",
                "hos_area": "武江区"
            },
            {
                "hos_name": "瑞派宠物医院（水坊路店）",
                "hos_province": "江苏省",
                "hos_city": "苏州市",
                "hos_area": "东凤镇"
            },
            {
                "hos_name": "曹浪峰宠物医院（白塔东路店）",
                "hos_province": "江苏省",
                "hos_city": "苏州市",
                "hos_area": "姑苏区"
            },
            {
                "hos_name": "瑞派宠物医院（干将西路店）",
                "hos_province": "江苏省",
                "hos_city": "苏州市",
                "hos_area": "姑苏区"
            },
            {
                "hos_name": "瑞派宠物医院（吴中西路店）",
                "hos_province": "江苏省",
                "hos_city": "苏州市",
                "hos_area": "沧浪区"
            },
            {
                "hos_name": "派特宠物医院（常熟枫林店）",
                "hos_province": "江苏省",
                "hos_city": "苏州市",
                "hos_area": "常熟市"
            },
            {
                "hos_name": "曹浪峰宠物医院（古墩路店）",
                "hos_province": "江苏省",
                "hos_city": "苏州市",
                "hos_area": "余杭区"
            },
            {
                "hos_name": "瑞派宠物诊疗中心（江城路店）",
                "hos_province": "江苏省",
                "hos_city": "杭州市",
                "hos_area": "上城区"
            },
            {
                "hos_name": "宠咖学苑（上塘路店）",
                "hos_province": "江苏省",
                "hos_city": "杭州市",
                "hos_area": "拱墅区"
            },
            {
                "hos_name": "派特宠物医院（崇宁路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "崇安区"
            },
            {
                "hos_name": "派特宠物医院（湖滨路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "滨湖区"
            },
            {
                "hos_name": "派特宠物医院（长江北路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "滨湖区"
            },
            {
                "hos_name": "派特宠物医院（永乐路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "南长区"
            },
            {
                "hos_name": "瑞派宠物医院（万科城市花园店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "滨湖区"
            },
            {
                "hos_name": "派特宠物医院（君山路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "江阴市"
            },
            {
                "hos_name": "派特宠物医院（延陵路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "江阴市"
            },
            {
                "hos_name": "派特宠物医院（朝阳路店）",
                "hos_province": "江苏省",
                "hos_city": "无锡市",
                "hos_area": "江阴市"
            },
            {
                "hos_name": "瑞派·哆利宠物美容中心（朱方路店）",
                "hos_province": "江苏省",
                "hos_city": "镇江市",
                "hos_area": "润州区"
            },
            {
                "hos_name": "瑞派宠物医院（大西路店）",
                "hos_province": "江苏省",
                "hos_city": "镇江市",
                "hos_area": "京口区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳和平店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "和平区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳大东店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "大东区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳浑南店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "浑南区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳铁西店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "铁西区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳沈河店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "沈河区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳于洪怒江店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "于洪区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳爱工店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "铁西区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳景星店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "铁西区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳北一路店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "铁西区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳猫科中心店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "和平区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳八纬路店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "沈河区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳振兴店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "和平区"
            },
            {
                "hos_name": "瑞派我宠我爱沈阳保利店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "沈河区"
            },
            {
                "hos_name": "冉祥宠物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "皇姑区"
            },
            {
                "hos_name": "安瑞宠物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "于洪区"
            },
            {
                "hos_name": "瑞派我宠我爱大庆新村店",
                "hos_province": "黑龙江省",
                "hos_city": "大庆市",
                "hos_area": "萨尔图区"
            },
            {
                "hos_name": "瑞派我宠我爱大庆让区店",
                "hos_province": "黑龙江省",
                "hos_city": "大庆市",
                "hos_area": "让胡路区"
            },
            {
                "hos_name": "瑞派我宠我爱哈尔滨南岗店店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            },
            {
                "hos_name": "瑞派我宠我爱哈尔滨道里店店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "道里区"
            },
            {
                "hos_name": "宠儿康动物医院南岗店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            },
            {
                "hos_name": "宠儿康动物医院道外店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "道外区"
            },
            {
                "hos_name": "宠儿康动物医院尚志店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "尚志市"
            },
            {
                "hos_name": "瑞派关忠·十里堡店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "瑞派关忠·管庄店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "瑞派关忠·北京市",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "瑞派关忠·润泽店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "望康国际动物医院—朝阳北路院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "瑞派关忠·望京店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "望康国际动物医院—将台西路院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "望康国际动物医院—康迪院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "瑞派关忠·友佳华贸城店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "瑞派关忠·丰北店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "丰台区"
            },
            {
                "hos_name": "瑞派关忠·三环新城店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "丰台区"
            },
            {
                "hos_name": "望康国际动物医院—云岗院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "丰台区"
            },
            {
                "hos_name": "望康国际动物医院—方庄院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "丰台区"
            },
            {
                "hos_name": "望康国际动物医院—马家堡院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "丰台区"
            },
            {
                "hos_name": "瑞派关忠·旧宫店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "大兴区"
            },
            {
                "hos_name": "瑞派关忠·亦庄店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "大兴区"
            },
            {
                "hos_name": "瑞派关忠·东关店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "昌平区"
            },
            {
                "hos_name": "北京农学院动物医院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "昌平区"
            },
            {
                "hos_name": "瑞派关忠·天通苑店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "昌平区"
            },
            {
                "hos_name": "瑞派关忠·广外店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "西城区"
            },
            {
                "hos_name": "瑞派关忠·马连道店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "西城区"
            },
            {
                "hos_name": "望康国际动物医院—白纸坊院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "西城区"
            },
            {
                "hos_name": "望康国际动物医院—德胜院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "西城区"
            },
            {
                "hos_name": "望康国际动物医院—良乡西潞园院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "房山区"
            },
            {
                "hos_name": "望康国际动物医院—信合院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "房山区"
            },
            {
                "hos_name": "瑞派关忠·国瑞店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "东城区"
            },
            {
                "hos_name": "望康国际动物医院—门头沟院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "门头沟区"
            },
            {
                "hos_name": "望康国际动物医院—通州怡佳院",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "通州区"
            },
            {
                "hos_name": "瑞派关忠·三河店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": ""
            },
            {
                "hos_name": "瑞派关忠·顺义店",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "顺义区"
            },
            {
                "hos_name": "瑞派关忠·亲亲宝贝",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "海淀区"
            },
            {
                "hos_name": "长江动物医院南开向阳路总院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "南开区"
            },
            {
                "hos_name": "长江动物医院河西黑牛城道分院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "河西区"
            },
            {
                "hos_name": "长江动物医院大港区新世纪大道分院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "滨海新区"
            },
            {
                "hos_name": "长江动物医院津塘路分院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "河东区"
            },
            {
                "hos_name": "长江动物医院天塔分院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "南开区"
            },
            {
                "hos_name": "长江动物医院蝶桥分院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "河东区"
            },
            {
                "hos_name": "笑康宠物诊所和平店",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "和平区"
            },
            {
                "hos_name": "沈阳市大东区宠爱动物医院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "大东区"
            },
            {
                "hos_name": "沈阳市和平区我宠我爱汇景动物医院",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "和平区"
            },
            {
                "hos_name": "沈阳市和平区长白我宠我爱动物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "和平区"
            },
            {
                "hos_name": "沈阳市浑南区亿丰我宠我爱动物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "浑南新区"
            },
            {
                "hos_name": "沈阳市沈河区我宠我爱动物医院方家栏店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "沈河区"
            },
            {
                "hos_name": "沈阳市沈河区我宠吾爱动物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "沈河区"
            },
            {
                "hos_name": "沈阳市铁西区保工我宠我爱动物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "铁西区"
            },
            {
                "hos_name": "沈阳市于洪区我爱我宠宠物诊所",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "于洪区"
            },
            {
                "hos_name": "沈阳市东清宠物医院",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "铁西区"
            },
            {
                "hos_name": "沈阳市于洪区我宠我爱动物医院怒江店",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "于洪区"
            },
            {
                "hos_name": "葫芦岛市连山区连山街尚宠居宠物门诊",
                "hos_province": "辽宁省",
                "hos_city": "葫芦岛市",
                "hos_area": "连山区"
            },
            {
                "hos_name": "大庆市让胡路区西缤我宠我爱动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "大庆市",
                "hos_area": "让胡路区"
            },
            {
                "hos_name": "兴城市旺财宠物诊所",
                "hos_province": "辽宁省",
                "hos_city": "兴城市",
                "hos_area": "兴城市"
            },
            {
                "hos_name": "大庆市萨尔图区奥维我宠宠物医院",
                "hos_province": "黑龙江省",
                "hos_city": "大庆市",
                "hos_area": "萨尔图区"
            },
            {
                "hos_name": "哈尔滨市南岗区自兴我宠我爱动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            },
            {
                "hos_name": "哈尔滨市香坊区我宠我爱动物医院安埠街店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "香坊区"
            },
            {
                "hos_name": "哈尔滨市香坊区我宠我爱动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "香坊区"
            },
            {
                "hos_name": "本溪市康贝动物门诊",
                "hos_province": "辽宁省",
                "hos_city": "本溪市",
                "hos_area": "明山区"
            },
            {
                "hos_name": "西岗区我宠我爱动物医院",
                "hos_province": "辽宁省",
                "hos_city": "大连市",
                "hos_area": "西岗区"
            },
            {
                "hos_name": "牡丹江市西安区我宠我爱动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "牡丹江市",
                "hos_area": "西安区"
            },
            {
                "hos_name": "牡丹江市东安区瑞派我宠我爱动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "牡丹江市",
                "hos_area": "东安区"
            },
            {
                "hos_name": "新民市我爱我宠动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "新民市",
                "hos_area": "新民市"
            },
            {
                "hos_name": "抚顺市顺城区我宠我爱贝康宠物医院",
                "hos_province": "辽宁省",
                "hos_city": "抚顺市",
                "hos_area": "顺城区"
            },
            {
                "hos_name": "北京熙爱友佳动物医院有限公司",
                "hos_province": "北京市",
                "hos_city": "北京市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "深圳市南山区大芊动物医院",
                "hos_province": "广东省",
                "hos_city": "深圳市",
                "hos_area": "南山区"
            },
            {
                "hos_name": "沈阳瑞派宠物用品有限公司",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "东陵区"
            },
            {
                "hos_name": "沈阳达北我宠我爱动物医院有限公司",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "大东区"
            },
            {
                "hos_name": "沈阳佳蓓我宠我爱动物医院有限公司",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "大东区"
            },
            {
                "hos_name": "长春我宠我爱动物医院有限公司",
                "hos_province": "吉林省",
                "hos_city": "长春市",
                "hos_area": "二道区"
            },
            {
                "hos_name": "长春瑞派我宠我爱动物医院有限公司",
                "hos_province": "吉林省",
                "hos_city": "长春市",
                "hos_area": "朝阳区"
            },
            {
                "hos_name": "大连新生瑞派动物医院有限公司",
                "hos_province": "辽宁省",
                "hos_city": "大连市",
                "hos_area": "河口区"
            },
            {
                "hos_name": "大连瑞派我宠我爱动物医疗有限公司",
                "hos_province": "辽宁省",
                "hos_city": "大连市",
                "hos_area": "西岗区"
            },
            {
                "hos_name": "盘锦我宠我爱动物医院有限公司",
                "hos_province": "辽宁省",
                "hos_city": "大连市",
                "hos_area": "兴隆台区"
            },
            {
                "hos_name": "惠州市惠城区康爱宠物医院江北分院",
                "hos_province": "广东省",
                "hos_city": "惠州市",
                "hos_area": "惠城区"
            },
            {
                "hos_name": "惠州市瑞派爱侣宠物医院有限责任公司",
                "hos_province": "广东省",
                "hos_city": "惠州市",
                "hos_area": ""
            },
            {
                "hos_name": "惠州市瑞派伴侣宠物医院有限公司",
                "hos_province": "广东省",
                "hos_city": "惠州市",
                "hos_area": ""
            },
            {
                "hos_name": "惠州市瑞派仁心宠物医院有限责任公司",
                "hos_province": "广东省",
                "hos_city": "惠州市",
                "hos_area": ""
            },
            {
                "hos_name": "惠州市惠城区康爱宠物医院",
                "hos_province": "广东省",
                "hos_city": "惠州市",
                "hos_area": "惠城区"
            },
            {
                "hos_name": "上海良良宠物诊所有限公司",
                "hos_province": "上海市",
                "hos_city": "上海市",
                "hos_area": ""
            },
            {
                "hos_name": "广州天河区瑞派员村博威动物医院有限公司",
                "hos_province": "广东省",
                "hos_city": "广州市",
                "hos_area": "天河区"
            },
            {
                "hos_name": "沈阳宠爱有家宠物医院有限公司",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": ""
            },
            {
                "hos_name": "沈阳市大东区双子宠物医院美容中心",
                "hos_province": "辽宁省",
                "hos_city": "沈阳市",
                "hos_area": "大东区"
            },
            {
                "hos_name": "哈尔滨市道里区奥斯卡动物医院",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            },
            {
                "hos_name": "东莞市瑞派守望者宠物医院有限公司",
                "hos_province": "广东省",
                "hos_city": "东莞市",
                "hos_area": ""
            },
            {
                "hos_name": "东莞市瑞派康贝美宠物医院有限公司",
                "hos_province": "广东省",
                "hos_city": "东莞市",
                "hos_area": ""
            },
            {
                "hos_name": "东莞市宠友宠物医院有限公司厚街分公司",
                "hos_province": "广东省",
                "hos_city": "东莞市",
                "hos_area": ""
            },
            {
                "hos_name": "瑞派先诺宠物医院",
                "hos_province": "广东省",
                "hos_city": "佛山市",
                "hos_area": ""
            },
            {
                "hos_name": "哈尔滨市道里区名冠宠物医院",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "道里区"
            },
            {
                "hos_name": "哈尔滨宠颐生宠健宠物医院有限公司",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": ""
            },
            {
                "hos_name": "哈尔滨宠颐生宠缘宠物医院有限公司",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": ""
            },
            {
                "hos_name": "哈尔滨市南岗区名冠宠物医院",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            },
            {
                "hos_name": "哈尔滨市南岗区名冠宠物医院红旗大街店",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            },
            {
                "hos_name": "天津市河北区唯恩未来宠物诊所",
                "hos_province": "天津市",
                "hos_city": "天津市",
                "hos_area": "河北区"
            },
            {
                "hos_name": "延边宠颐生动物医院",
                "hos_province": "吉林省",
                "hos_city": "延吉市",
                "hos_area": ""
            },
            {
                "hos_name": "哈尔滨市铭宠宠物医院",
                "hos_province": "黑龙江省",
                "hos_city": "哈尔滨市",
                "hos_area": "南岗区"
            }
        ],
        onPageChange: function (size, number) {
            //$("#pageSizeInput").val(size);
            //$("#pageNumberInput").val(number);

            //var form = $('#tableForm');
            //form.action= '${base}/showReport';
            //form.submit();
        },
        //onSort: function (name, order) {
        // },
        //formatShowingRows: function (pageFrom, pageTo, totalRows) {
        //	return '';
        // },
        //formatRecordsPerPage: function () {
        //	return '';
        //  },
        formatNoMatches: function(){
            return '无内容/请重试';
        }
    });

    $(window).resize(function () {
        $('#reportTableH').bootstrapTable('resetView');
    });
});