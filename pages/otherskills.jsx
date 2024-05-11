import { useState } from "react";
import BannerLayout from "../components/Common/BannerLayout";
import Footer from "../components/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/Common/ParagraphSkeleton";
import React from "react";
import OtherSkillsExp_Card from "../components/OtherSkillsAndHobbies/OtherSkillsExp_Card";
import OtherSkills_Card from "../components/OtherSkillsAndHobbies/OtherSkills_Card";
import { Hobbies, SOFT_SKILLS, TECH_STACK } from "../constants/constants";
import Badge from "../components/Common/Badge";
import Contact from "./contact_hidden";

function OtherSkills() {
  const { isLoading, error, data } = useQuery("background", () =>
    axios
      .get("api/background")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <BannerLayout>
      <div className="grid md:grid-cols-2 md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
        <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Other Skill
          </div>

          <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
              <span className="text-Snow text-xs font-bold">TECK SKILLS</span>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.map((item, index) => (
                  <Badge key={index} title={item} />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
              <span className="text-Snow text-xs font-bold">SOFT SKILLS</span>
              <div className="flex flex-wrap gap-2">
                {SOFT_SKILLS.map((item, index) => (
                  <Badge key={index} title={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
              <span className="text-Snow text-xs font-bold">Hobbies</span>
              <div className="flex flex-wrap gap-2">
                {Hobbies.map((item, index) => (
                  <Badge key={index} title={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="flex flex-col gap-y-4 md:ml-12">
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default OtherSkills;
