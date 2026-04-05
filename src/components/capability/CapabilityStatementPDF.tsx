"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

/* ------------------------------------------------------------------ */
/*  Colour tokens (matching site palette)                              */
/* ------------------------------------------------------------------ */
const c = {
  ocean950: "#072a49",
  ocean700: "#015d9f",
  ocean600: "#0074c5",
  ocean100: "#e0effe",
  ocean50: "#f0f7ff",
  bush600: "#358539",
  bush50: "#f3faf3",
  ochre600: "#c26b17",
  ochre50: "#fdf8ed",
  sunset600: "#df3b18",
  sunset50: "#fef4ee",
  gray100: "#f3f4f6",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  white: "#ffffff",
};

/* ------------------------------------------------------------------ */
/*  Styles                                                             */
/* ------------------------------------------------------------------ */
const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    color: c.gray700,
    paddingTop: 0,
    paddingBottom: 40,
    paddingHorizontal: 0,
  },

  /* Cover / Header */
  coverBand: {
    backgroundColor: c.ocean950,
    paddingVertical: 50,
    paddingHorizontal: 48,
    marginBottom: 0,
  },
  coverTitle: {
    fontSize: 28,
    fontFamily: "Helvetica-Bold",
    color: c.white,
    marginBottom: 4,
  },
  coverSubtitle: {
    fontSize: 13,
    color: c.ocean100,
    marginBottom: 16,
  },
  coverTagline: {
    fontSize: 10,
    color: c.ocean100,
    lineHeight: 1.6,
    maxWidth: 380,
  },

  /* Image placeholder */
  imagePlaceholder: {
    backgroundColor: c.gray100,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderStyle: "dashed",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    marginBottom: 12,
  },
  imagePlaceholderText: {
    fontSize: 8,
    color: c.gray500,
    textAlign: "center" as const,
  },

  /* Section-level */
  section: {
    paddingHorizontal: 48,
    marginTop: 28,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    color: c.ocean950,
    marginBottom: 10,
    paddingBottom: 4,
    borderBottomWidth: 2,
    borderBottomColor: c.ocean600,
  },
  sectionIntro: {
    fontSize: 9.5,
    lineHeight: 1.6,
    color: c.gray600,
    marginBottom: 14,
  },

  /* Cards (services, impacts) */
  cardRow: {
    flexDirection: "row" as const,
    gap: 10,
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: c.ocean50,
    borderRadius: 6,
    padding: 12,
  },
  cardTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: c.ocean950,
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 8,
    lineHeight: 1.5,
    color: c.gray600,
  },

  /* Projects */
  projectRow: {
    flexDirection: "row" as const,
    marginBottom: 14,
    gap: 12,
  },
  projectImage: {
    width: 120,
    height: 80,
  },
  projectContent: {
    flex: 1,
  },
  projectTitle: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: c.ocean950,
    marginBottom: 2,
  },
  projectMeta: {
    fontSize: 8,
    color: c.ocean600,
    marginBottom: 4,
  },
  projectDesc: {
    fontSize: 8,
    lineHeight: 1.5,
    color: c.gray600,
  },

  /* Clients strip */
  clientsRow: {
    flexDirection: "row" as const,
    flexWrap: "wrap" as const,
    gap: 8,
    marginTop: 4,
  },
  clientBadge: {
    backgroundColor: c.gray100,
    borderRadius: 12,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  clientBadgeText: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: c.gray700,
  },

  /* Awards / Education / Credentials columns */
  threeCol: {
    flexDirection: "row" as const,
    gap: 14,
  },
  col: {
    flex: 1,
    backgroundColor: c.ocean50,
    borderRadius: 6,
    padding: 12,
  },
  colTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: c.ocean950,
    marginBottom: 8,
  },
  colItem: {
    marginBottom: 6,
  },
  colItemTitle: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    color: c.ocean950,
  },
  colItemSub: {
    fontSize: 7.5,
    color: c.gray500,
  },
  bullet: {
    flexDirection: "row" as const,
    gap: 4,
    marginBottom: 4,
  },
  bulletDot: {
    fontSize: 8,
    color: c.bush600,
    marginTop: -1,
  },
  bulletText: {
    fontSize: 8,
    color: c.gray600,
    flex: 1,
  },

  /* Footer */
  footer: {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: c.ocean950,
    paddingVertical: 14,
    paddingHorizontal: 48,
    flexDirection: "row" as const,
    justifyContent: "space-between" as const,
  },
  footerText: {
    fontSize: 7.5,
    color: c.ocean100,
  },
  footerLink: {
    fontSize: 7.5,
    color: c.ocean100,
    textDecoration: "none",
  },

  /* Quote */
  quoteBlock: {
    backgroundColor: c.ocean50,
    borderRadius: 8,
    padding: 20,
    marginTop: 14,
    borderLeftWidth: 3,
    borderLeftColor: c.ocean600,
  },
  quoteText: {
    fontSize: 10,
    fontStyle: "italic",
    color: c.ocean950,
    lineHeight: 1.6,
  },

  /* Page number */
  pageNumber: {
    position: "absolute" as const,
    bottom: 16,
    right: 48,
    fontSize: 7,
    color: c.gray500,
  },
});

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */
function pairs<T>(arr: T[]): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr.slice(i, i + 2));
  }
  return result;
}

function ImagePlaceholder({ label, width, height }: { label: string; width: number | string; height: number }) {
  return (
    <View style={[s.imagePlaceholder, { width, height }]}>
      <Text style={s.imagePlaceholderText}>{label}</Text>
    </View>
  );
}

function SectionTitle({ children }: { children: string }) {
  return <Text style={s.sectionTitle}>{children}</Text>;
}

function Footer() {
  return (
    <View style={s.footer} fixed>
      <Text style={s.footerText}>
        InkHunter — Patrick Hunter | inkhunterart@gmail.com | Sydney, Northern Beaches
      </Text>
      <Link src="https://inkhunterartist.com.au" style={s.footerLink}>
        inkhunterartist.com.au
      </Link>
    </View>
  );
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */
const services = [
  { title: "Large-Scale Murals", desc: "Transformative murals for councils, government bodies, and institutions — from concept to completion." },
  { title: "Cultural Precinct Development", desc: "Holistic placemaking and streetscape activation through integrated public art programs." },
  { title: "Community Consultation & Co-Design", desc: "Genuine stakeholder engagement, workshops, and community-led design processes." },
  { title: "Environmental Advocacy Art", desc: "Murals responding to ecological crises — raising awareness and demanding action through beauty." },
  { title: "Emerging Artist Programs", desc: "Mentoring and collaboration with next-generation public artists on major projects." },
  { title: "Therapeutic Art & Wellbeing", desc: "Art programs designed for mental health, social cohesion, and community connection." },
  { title: "Digital Art & Animation", desc: "AR overlays, immersive digital installations, and animated extensions of physical work." },
  { title: "Educational Workshops", desc: "Sustainability and creativity workshops for schools, councils, and organisations." },
];

const projects = [
  {
    title: "Harris Park Cultural Precinct",
    year: "2026",
    client: "City of Parramatta",
    desc: "100+ metre mural celebrating Little India — migration stories, shared meals, festivals, native wildlife, and river connectivity. Created with co-artists Gauri Torgalkar and Em Hatton. National media coverage and increased foot traffic.",
    imagePlaceholder: "Harris Park mural hero image",
  },
  {
    title: "Shallow Iridescence",
    year: "2023",
    client: "Australian National Maritime Museum",
    desc: "Perspective mural revealing a giant blue-ringed octopus from Pyrmont Bridge. Collaboration with First Nations curator Tyson Frigo and team. Led to the 'Octopus Garden' digital experience commission.",
    imagePlaceholder: "Shallow Iridescence mural photo",
  },
  {
    title: "Marion Bay Algae Crisis Mural",
    year: "2025",
    client: "Self-initiated, community-supported",
    desc: "16,000 km journey to South Australia. Underwater 'coat of arms' featuring Leafy Sea Dragon and Giant Australian Cuttlefish. Supported by Great Southern Reef Foundation. National media coverage.",
    imagePlaceholder: "Marion Bay mural photo",
  },
  {
    title: "Passing On — Maitland",
    year: "2022",
    client: "Maitland City Council",
    desc: "First of seven Maitlanes project laneways. Environmental themes with native trees and flowing gum leaves. 100% renewable Colormaker paints. Set the creative benchmark for subsequent laneways.",
    imagePlaceholder: "Passing On mural photo",
  },
  {
    title: "Manly Vibes",
    year: "2019",
    client: "Northern Beaches Council",
    desc: "Award-winning coastal celebration. Won Australian Street Art Awards Utility Award 2019. Continues as the most photographed piece on Sydney's Northern Beaches.",
    imagePlaceholder: "Manly Vibes mural photo",
  },
];

const clients = [
  "NSW Government",
  "Australian Government",
  "City of Parramatta",
  "Australian National Maritime Museum",
  "Maitland City Council",
  "Great Southern Reef Foundation",
];

const awards = [
  { title: "Australian Street Art Awards — Utility Award", sub: "2019 — Manly Vibes Mural" },
  { title: "Northern Beaches Art Prize", sub: "2020 — Environmental public art" },
  { title: "Katoomba Street Art Walk", sub: "2021 — Featured artist" },
];

const education = [
  { title: "Bachelor of Fine Arts & Graphic Design", sub: "Australian Catholic University (ACU)" },
  { title: "Religious Symbolism Studies", sub: "Venice Biennale" },
];

const credentials = [
  "Founder, Plastic Free Beaches (2020)",
  "7 years as a Surf Lifesaver",
  "Surfer, freediver, sustainable fisherman",
  "Sustainable Colormaker paints advocate",
];

/* ------------------------------------------------------------------ */
/*  Document                                                           */
/* ------------------------------------------------------------------ */
export default function CapabilityStatementPDF() {
  return (
    <Document
      title="InkHunter — Capability Statement"
      author="Patrick Hunter — InkHunter"
      subject="Large-scale public art capability statement"
    >
      {/* ============ PAGE 1: COVER + ABOUT + SERVICES ============ */}
      <Page size="A4" style={s.page}>
        {/* Cover band */}
        <View style={s.coverBand}>
          <Text style={s.coverTitle}>InkHunter</Text>
          <Text style={s.coverSubtitle}>Capability Statement</Text>
          <Text style={s.coverTagline}>
            Large-scale public art that transforms communities.{"\n"}
            Environmental murals and placemaking that connect people to place, nature, and each other.
          </Text>
          <View style={{ marginTop: 16 }}>
            <ImagePlaceholder label="Cover image — hero mural photograph" width="100%" height={160} />
          </View>
        </View>

        {/* About */}
        <View style={s.section}>
          <SectionTitle>About InkHunter</SectionTitle>
          <Text style={s.sectionIntro}>
            InkHunter is the practice of Patrick Hunter — an environmental and community-based mural artist based on
            Sydney&apos;s Northern Beaches. We partner with councils, developers, and government bodies to create public
            art that does more than beautify — it connects communities to place, activates precincts, and delivers
            measurable outcomes.
          </Text>
          <Text style={s.sectionIntro}>
            Every project is built on three pillars: environment, community, and wellbeing. From genuine community
            consultation and co-design through to culturally reflective delivery using sustainable materials, our
            approach ensures that every artwork carries meaning, impact, and legacy.
          </Text>
        </View>

        {/* Services */}
        <View style={s.section}>
          <SectionTitle>Services</SectionTitle>
          {pairs(services).map((row, ri) => (
            <View key={ri} style={s.cardRow} wrap={false}>
              {row.map((svc) => (
                <View key={svc.title} style={s.card}>
                  <Text style={s.cardTitle}>{svc.title}</Text>
                  <Text style={s.cardDesc}>{svc.desc}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <Footer />
      </Page>

      {/* ============ PAGE 2: KEY PROJECTS ============ */}
      <Page size="A4" style={s.page}>
        <View style={[s.section, { marginTop: 40 }]}>
          <SectionTitle>Key Projects</SectionTitle>

          {projects.map((proj) => (
            <View key={proj.title} style={s.projectRow} wrap={false}>
              <View style={s.projectImage}>
                <ImagePlaceholder label={proj.imagePlaceholder} width={120} height={80} />
              </View>
              <View style={s.projectContent}>
                <Text style={s.projectTitle}>{proj.title}</Text>
                <Text style={s.projectMeta}>
                  {proj.year} — {proj.client}
                </Text>
                <Text style={s.projectDesc}>{proj.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        <Footer />
      </Page>

      {/* ============ PAGE 3: IMPACT + CLIENTS + CREDENTIALS ============ */}
      <Page size="A4" style={s.page}>
        {/* Impact quote */}
        <View style={[s.section, { marginTop: 40 }]}>
          <SectionTitle>Why Public Art Matters</SectionTitle>
          <Text style={s.sectionIntro}>
            Well-executed public art delivers measurable returns across economic, social, and wellbeing metrics that few
            other investments can match.
          </Text>

          {pairs([
            { title: "Economic Impact", desc: "Increases property values, drives foot traffic, and positions precincts as destinations.", bg: c.ochre50 },
            { title: "Social Cohesion", desc: "Creates belonging, pride, and ownership through community-reflective artwork.", bg: c.ocean50 },
            { title: "Environmental Awareness", desc: "Visual storytelling that demands political action and inspires behaviour change at scale.", bg: c.bush50 },
            { title: "Wellbeing & Mental Health", desc: "Transforms everyday environments into spaces that nourish rather than deplete.", bg: c.sunset50 },
          ]).map((row, ri) => (
            <View key={ri} style={s.cardRow} wrap={false}>
              {row.map((item) => (
                <View key={item.title} style={[s.card, { backgroundColor: item.bg }]}>
                  <Text style={s.cardTitle}>{item.title}</Text>
                  <Text style={s.cardDesc}>{item.desc}</Text>
                </View>
              ))}
            </View>
          ))}

          <View style={s.quoteBlock}>
            <Text style={s.quoteText}>
              &ldquo;Since the pandemic, people are looking to public spaces as a safe, open environment to connect
              with others. The artworks enhance our open spaces, improve walkability and connection, encourage day and
              night activity, and increase footfall.&rdquo;
            </Text>
          </View>
        </View>

        {/* Clients */}
        <View style={s.section}>
          <SectionTitle>Trusted By</SectionTitle>
          <View style={s.clientsRow}>
            {clients.map((client) => (
              <View key={client} style={s.clientBadge}>
                <Text style={s.clientBadgeText}>{client}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Awards / Education / Credentials */}
        <View style={s.section}>
          <SectionTitle>Awards, Education & Credentials</SectionTitle>
          <View style={s.threeCol}>
            {/* Awards */}
            <View style={[s.col, { backgroundColor: c.ochre50 }]}>
              <Text style={s.colTitle}>Awards</Text>
              {awards.map((a) => (
                <View key={a.title} style={s.colItem}>
                  <Text style={s.colItemTitle}>{a.title}</Text>
                  <Text style={s.colItemSub}>{a.sub}</Text>
                </View>
              ))}
            </View>
            {/* Education */}
            <View style={s.col}>
              <Text style={s.colTitle}>Education</Text>
              {education.map((e) => (
                <View key={e.title} style={s.colItem}>
                  <Text style={s.colItemTitle}>{e.title}</Text>
                  <Text style={s.colItemSub}>{e.sub}</Text>
                </View>
              ))}
            </View>
            {/* Beyond the Studio */}
            <View style={[s.col, { backgroundColor: c.bush50 }]}>
              <Text style={s.colTitle}>Beyond the Studio</Text>
              {credentials.map((cred) => (
                <View key={cred} style={s.bullet}>
                  <Text style={s.bulletDot}>{"\u2022"}</Text>
                  <Text style={s.bulletText}>{cred}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Process image placeholder */}
        <View style={[s.section, { marginTop: 14 }]}>
          <ImagePlaceholder label="Process / studio / community consultation photograph" width="100%" height={100} />
        </View>

        <Footer />
      </Page>
    </Document>
  );
}
