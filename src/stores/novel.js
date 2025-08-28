import { ref, computed } from "vue";
import { defineStore } from "pinia";
import mockImageNovel from "@/assets/mock_images/novel.png"
export const useNovelStore = defineStore("novelStore", () => {
  const mockNovel = ref([
    {
      rank: 1,
      genre: "แฟนตาซี",
      title: "ตำนานนักรบแห่งเงา",
      author: "จันทรา พเนจร",
      image_url: mockImageNovel,
    },
    {
      rank: 2,
      genre: "โรแมนติกคอมเมดี้",
      title: "หัวใจยัยตัวร้ายกับนายท่านประธาน",
      author: "กอหญ้า",
      image_url: mockImageNovel,
    },
    {
      rank: 3,
      genre: "ไซไฟ",
      title: "จักรวาลคู่ขนานที่สาบสูญ",
      author: "โอเมก้า 13",
      image_url: mockImageNovel,
    },
    {
      rank: 4,
      genre: "สืบสวนสอบสวน",
      title: "คดีปริศนาในคฤหาสน์สีดำ",
      author: "นักสืบเอกซ์",
      image_url: mockImageNovel,
    },
    {
      rank: 5,
      genre: "ย้อนยุค",
      title: "เมื่อข้าเป็นองค์หญิงในยุคโบราณ",
      author: "หงส์หยก",
      image_url: mockImageNovel,
    },
    {
      rank: 6,
      genre: "แฟนตาซี",
      title: "จอมเวทพิทักษ์ดวงดาว",
      author: "แสงตะวัน",
      image_url: mockImageNovel,
    },
    {
      rank: 7,
      genre: "โรแมนติกดราม่า",
      title: "รักสุดท้ายของนางเอกนอกบท",
      author: "ปลายฝนต้นหนาว",
      image_url: mockImageNovel,
    },
    {
      rank: 8,
      genre: "แอคชั่น",
      title: "รหัสลับใต้เงามืด",
      author: "พายุหมอก",
      image_url: mockImageNovel,
    },
    {
      rank: 9,
      genre: "สยองขวัญ",
      title: "เสียงกระซิบจากหลุมศพ",
      author: "วิญญาณเร่ร่อน",
      image_url: mockImageNovel,
    },
    {
      rank: 10,
      genre: "ไลท์โนเวล",
      title: "ผมกับเธอกับโลกใบใหม่",
      author: "ยูเมะซากุระ",
      image_url: mockImageNovel,
    },
    {
      rank: 11,
      genre: "แฟนตาซี",
      title: "กาลเวลาที่หวนคืนของจอมราชันย์",
      author: "หมอกสีเทา",
      image_url: mockImageNovel,
    },
    {
      rank: 12,
      genre: "โรแมนติกแฟนตาซี",
      title: "พันธสัญญาแห่งรักนิรันดร์",
      author: "ดวงดาว",
      image_url: mockImageNovel,
    },
    {
      rank: 13,
      genre: "จีนโบราณ",
      title: "บุปผาลิขิตรัก",
      author: "ซือฝู",
      image_url: mockImageNovel,
    },
    {
      rank: 14,
      genre: "เกมออนไลน์",
      title: "ผู้เล่นคนสุดท้ายในเกมแห่งความตาย",
      author: "แอนโนมาลี",
      image_url: mockImageNovel,
    },
    {
      rank: 15,
      genre: "โรแมนติก",
      title: "ซุปเปอร์สตาร์ของฉันคือคุณ",
      author: "พริ้มเพรา",
      image_url: mockImageNovel,
    },
    {
      rank: 16,
      genre: "ดราม่า",
      title: "รอยแผลเป็นบนดวงจันทร์",
      author: "จันทร์แรม",
      image_url: mockImageNovel,
    },
    {
      rank: 17,
      genre: "แฟนตาซี",
      title: "โลกหลังความตายที่ไร้ซึ่งวิญญาณ",
      author: "ยมทูตเงียบ",
      image_url: mockImageNovel,
    },
    {
      rank: 18,
      genre: "สืบสวนสอบสวน",
      title: "ปริศนาคดีห้องปิดตาย",
      author: "นักสืบ Q",
      image_url: mockImageNovel,
    },
    {
      rank: 19,
      genre: "ย้อนยุค",
      title: "ข้าคือนางร้ายในนิยายที่ข้ารัก",
      author: "จอมมาร",
      image_url: mockImageNovel,
    },
    {
      rank: 20,
      genre: "ฮาเร็ม",
      title: "เมื่อผมต้องจีบสาว 20 คนพร้อมกัน",
      author: "หนุ่มโสด",
      image_url: mockImageNovel,
    },
  ]);

  const mockBookmark = ref([
    {
      title: "ตำนานนักรบแห่งเงา",
      author: "จันทรา พเนจร",
      image_url: mockImageNovel,
      episode_number: 12,
      episode_title: "ดาบต้องสาปแห่งความมืด",
      datetime: "20 ส.ค. 68 / 19.30",
    },
    {
      title: "หัวใจยัยตัวร้ายกับนายท่านประธาน",
      author: "กอหญ้า",
      image_url: mockImageNovel,
      episode_number: 25,
      episode_title: "เมื่อหัวใจเริ่มเต้นแรง",
      datetime: "19 ส.ค. 68 / 21.15",
    },
    {
      title: "จักรวาลคู่ขนานที่สาบสูญ",
      author: "โอเมก้า 13",
      image_url: mockImageNovel,
      episode_number: 7,
      episode_title: "หลุมดำแห่งกาลเวลา",
      datetime: "18 ส.ค. 68 / 20.00",
    },
    {
      title: "คดีปริศนาในคฤหาสน์สีดำ",
      author: "นักสืบเอกซ์",
      image_url: mockImageNovel,
      episode_number: 15,
      episode_title: "เงาที่หายไปในห้องโถง",
      datetime: "17 ส.ค. 68 / 22.00",
    },
    {
      title: "เมื่อข้าเป็นองค์หญิงในยุคโบราณ",
      author: "หงส์หยก",
      image_url: mockImageNovel,
      episode_number: 33,
      episode_title: "แผนการของขันที",
      datetime: "16 ส.ค. 68 / 18.45",
    },
    {
      title: "จอมเวทพิทักษ์ดวงดาว",
      author: "แสงตะวัน",
      image_url: mockImageNovel,
      episode_number: 9,
      episode_title: "คัมภีร์แห่งแสง",
      datetime: "15 ส.ค. 68 / 19.00",
    },
    {
      title: "รักสุดท้ายของนางเอกนอกบท",
      author: "ปลายฝนต้นหนาว",
      image_url: mockImageNovel,
      episode_number: 21,
      episode_title: "คำลาที่ไม่ได้เอ่ย",
      datetime: "14 ส.ค. 68 / 20.15",
    },
    {
      title: "รหัสลับใต้เงามืด",
      author: "พายุหมอก",
      image_url: mockImageNovel,
      episode_number: 18,
      episode_title: "ปฏิบัติการคืนชีพ",
      datetime: "13 ส.ค. 68 / 21.45",
    },
  ]);

  const getAllNovel = () => mockNovel.value;
  const getAllBookmark = () => mockBookmark.value;
  const deleteAllBookmark = (indexs = []) => {
    indexs.forEach((index) => {
      const bookmark = mockBookmark.value[index];
      if (bookmark) {
        mockBookmark.value.splice(index, 1);
      }
    });
  };

  return { getAllNovel, getAllBookmark, deleteAllBookmark };
});
