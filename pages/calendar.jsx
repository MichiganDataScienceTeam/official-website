import Layout from "@/components/layout";
import Hero from "@/components/hero";
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import Button from "@/components/button";
import loadStaticData from "@/shared/static";
import HeadContent from "@/components/headContent";

export default function CalendarPage({ calendarLink }) {
  return (
    <Layout>
      <HeadContent
        title={"Michigan Data Science Team - Calendar"}
        description={
          "Here is a calendar of all of the Michigan Data Science Team events!"
        }
      />
      <Hero title="Calendar" />
      <section className="py-16 lg:py-24 px-4 lg:px-6 max-w-screen-xl mx-auto">
        <div className="mb-6 lg:mb-8">
          <Button className='mb-4' href={calendarLink} text={"Add to Google Calendar"} />
        </div>
        <FullCalendar
          plugins={[listPlugin, googleCalendarPlugin]}
          initialView="listMonth"
          googleCalendarApiKey="AIzaSyDsoaZFzbHcCD7m6rhelWdsWS_AjLJQCko"
          events={{
            googleCalendarId: 'c_22ca0c151585760442cad5796fb91bd18b7db11d813e9143e38549aadce65afe@group.calendar.google.com',
          }}
        />
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const data = loadStaticData("links.json");
  let calendarLink = data.find(obj => obj.name === "Calendar")?.href || ""

  return { props: { calendarLink } };
}
