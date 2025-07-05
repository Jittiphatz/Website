/* eslint-disable prettier/prettier */
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import LenisComponent from "@/components/LenisComponent";
import DefaultLayout from "@/layouts/default";
import { title } from "@/components/primitives";

const certificates = [
    {
        title: "การแข่งขันการสร้างการ์ตูนแอนิเมชั่น (2D Animation)",
        subtitle: "ระดับมัธยมศึกษาตอนต้น",
        date: "17 ธันวาคม 2565",
        link: "https://esan70.sillapa.net/sm-nma/modules/school/school_list_excel.php?compid=40",
        image: "/img/cert/cert-70.png",
    },
    {
        title: "การประกวดวงดนตรีสตริง ระดับมัธยมศึกษาตอนต้น",
        subtitle: "ลำดับที่ 2 รองชนะเลิศ ระดับเขต ชั้นมัธยมศึกษาปีที่ 2",
        date: "21 ธันวาคม 2566",
        link: "https://2566.compet.site/Compet.Mattayom31SM/show_register_activity.php?id=643",
        image: "/img/cert/cert-71.png",
    },
    {
        title: "BWN Music Festival 2024",
        subtitle: "การแข่งขันประกวดวงดนตรีของโรงเรียนบุญวัฒนา ได้ลำดับที่ 4 ชั้นมัธยมศึกษาปีที่ 3",
        date: "14 กุมภาพันธ์ 2567",
        link: "https://www.facebook.com/CouncilBoon/posts/pfbid0vH2WKjWakVmwMtitoGeom3uDivYaJbjw4nBmkSDky4Td9DLx4y8eELsdvrEchqhJl",
        image: "/img/cert/bwn-music-fest-cert.png",
    },
];

export default function CertificatePage() {
    return (
        <DefaultLayout>
            <LenisComponent />
            <section className="flex flex-col items-center justify-center gap-8 ">
                <div className="inline-block max-w-lg text-center justify-center">
                    <h1 className={title()}>Certificates</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
                    {certificates.map((cert) => (
                        <motion.div
                            key={cert.title}
                            animate={{ opacity: 1, scale: 1 }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.05 }}
                        >
                            <Card key={cert.title} className="flex flex-col h-full shadow-xl">
                                <CardHeader className="p-0">
                                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-t-xl">
                                        <Image
                                            fill
                                            priority
                                            alt={cert.title}
                                            className="object-cover"
                                            quality={100}
                                            src={cert.image}
                                        />
                                    </div>
                                </CardHeader>
                                <CardBody className="flex-grow">
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-bold text-secondary line-clamp-2">
                                            {cert.title}
                                        </h2>
                                        <p className="text-sm text-default-600 font-medium">
                                            {cert.subtitle}
                                        </p>
                                        <div className="space-y-1">
                                            <p className="text-sm text-default-400">
                                                {cert.date}
                                            </p>
                                        </div>
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <Button
                                        as="a"
                                        className="w-full"
                                        color="success"
                                        href={cert.link}
                                        radius="full"
                                        rel="noopener noreferrer"
                                        size="lg"
                                        target="_blank"
                                        variant="shadow"
                                    >
                                        <ExternalLink className="w-5 h-5" /> ดูรายละเอียด
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}

                </div>

            </section>

        </DefaultLayout>
    );
}