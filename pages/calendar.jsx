import Layout from "@/components/layout";
import Hero from "@/components/hero";
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function CalendarPage({ content }) {

  return (
    <Layout>
      <Hero title="Calendar" />
      <div className="mx-auto container p-2">
        <FullCalendar
          plugins={[listPlugin, googleCalendarPlugin]}
          initialView="listMonth"
          googleCalendarApiKey="AIzaSyDsoaZFzbHcCD7m6rhelWdsWS_AjLJQCko"
          events={{
            googleCalendarId: 'c_22ca0c151585760442cad5796fb91bd18b7db11d813e9143e38549aadce65afe@group.calendar.google.com',
          }}
        />
      </div>

    </Layout>
  );
}
