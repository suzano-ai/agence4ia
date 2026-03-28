import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { supabaseAdmin } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

const serviceLabels: Record<string, { fr: string; en: string }> = {
  learnAI: { fr: "Formation IA — Apprendre l'IA", en: "AI Training — Learn AI" },
  integration: { fr: "Intégration IA — Déploiement IA", en: "AI Integration — Deployment" },
};

const budgetLabels: Record<string, string> = {
  under500: "Moins de 500€",
  "500to1000": "500€ – 1 000€",
  "1000to5000": "1 000€ – 5 000€",
  over5000: "Plus de 5 000€",
};

function buildClientEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
}) {
  const isFormation = data.service === "learnAI";
  const serviceLabel = serviceLabels[data.service]?.fr ?? data.service;

  const formationBlock = `
    <div style="background:#f0fdf4;border-left:4px solid #3ab598;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
      <h3 style="margin:0 0 8px;color:#3ab598;font-size:16px;">🎓 Ce qui vous attend avec Learn AI</h3>
      <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
        <li>Sessions en ligne via <strong>Google Meet</strong>, à votre rythme</li>
        <li>Durée flexible : <strong>1h à 5h+</strong> selon vos besoins</li>
        <li>Tarifs dégressifs : <strong>à partir de 20€/h</strong> (réductions dès 2h)</li>
        <li><strong>Certificat de formation</strong> remis à l'issue du parcours</li>
        <li>Accompagnement personnalisé par nos experts IA</li>
      </ul>
    </div>
    <div style="background:#fef3c7;border-left:4px solid #FFC466;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
      <h3 style="margin:0 0 8px;color:#92400e;font-size:16px;">💡 Prochaines étapes</h3>
      <ol style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
        <li>Nous vous contactons sous <strong>24h</strong> pour fixer un créneau gratuit de découverte</li>
        <li>Évaluation de votre niveau actuel et définition de votre programme sur mesure</li>
        <li>Démarrage de vos sessions dès la semaine suivante</li>
      </ol>
    </div>
  `;

  const integrationBlock = `
    <div style="background:#f5f3ff;border-left:4px solid #8e59ff;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
      <h3 style="margin:0 0 8px;color:#8e59ff;font-size:16px;">🤖 Ce que nous pouvons déployer pour vous</h3>
      <ul style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
        <li><strong>ChatBot Pro</strong> — Chatbot IA pour votre site web et support client</li>
        <li><strong>VoiceAgent</strong> — IA pour appels entrants et prise de rendez-vous automatique</li>
        <li><strong>ContentFlow</strong> — Génération & publication automatique de contenu Instagram</li>
        <li><strong>BookingAI</strong> — Gestion IA de vos réservations et agenda</li>
        <li><strong>AutoPilot</strong> — Agents IA sur mesure pour vos processus métier</li>
        <li>Et bien plus…</li>
      </ul>
    </div>
    <div style="background:#fef3c7;border-left:4px solid #FFC466;padding:16px 20px;margin:20px 0;border-radius:0 8px 8px 0;">
      <h3 style="margin:0 0 8px;color:#92400e;font-size:16px;">💡 Notre process</h3>
      <ol style="margin:0;padding-left:20px;color:#374151;font-size:14px;line-height:1.8;">
        <li><strong>Audit gratuit</strong> — Analyse de vos besoins et processus actuels</li>
        <li><strong>Proposition sur mesure</strong> — Sélection des blocs IA les plus adaptés</li>
        <li><strong>Déploiement</strong> — Intégration dans vos outils existants</li>
        <li><strong>Abonnement mensuel sans engagement</strong> à partir de 100€/mois</li>
      </ol>
    </div>
  `;

  return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4ebe2;font-family:'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;border:2px solid #010101;box-shadow:4px 4px 0 #010101;">
    
    <!-- Header -->
    <div style="background:#8e59ff;padding:32px 40px;text-align:center;">
      <div style="display:inline-block;background:#f4ebe2;padding:8px 16px;border:2px solid #010101;margin-bottom:16px;">
        <span style="font-size:24px;font-weight:900;color:#010101;">Agence</span><span style="font-size:24px;font-weight:900;color:#8e59ff;background:#f4ebe2;">4IA</span>
      </div>
      <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:800;">Merci ${data.fullName.split(" ")[0]} ! 🎉</h1>
      <p style="color:#e9d5ff;margin:8px 0 0;font-size:15px;">Votre demande a bien été reçue</p>
    </div>

    <!-- Body -->
    <div style="padding:32px 40px;">
      
      <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 16px;">
        Bonjour <strong>${data.fullName}</strong>,
      </p>
      <p style="color:#374151;font-size:15px;line-height:1.7;margin:0 0 24px;">
        Nous avons bien reçu votre demande concernant <strong>${serviceLabel}</strong>. 
        Notre équipe va l'étudier avec attention et vous recontactera dans les <strong>24 heures</strong> ouvrées.
      </p>

      <!-- Recap box -->
      <div style="background:#f4ebe2;border:2px solid #010101;padding:20px;margin:0 0 24px;border-radius:4px;">
        <h3 style="margin:0 0 12px;font-size:15px;font-weight:800;color:#010101;border-bottom:2px solid #010101;padding-bottom:8px;">📋 Récapitulatif de votre demande</h3>
        <table style="width:100%;font-size:13px;color:#374151;border-collapse:collapse;">
          <tr><td style="padding:6px 0;font-weight:700;width:40%;">Service :</td><td style="padding:6px 0;">${serviceLabel}</td></tr>
          ${data.company ? `<tr><td style="padding:6px 0;font-weight:700;">Entreprise :</td><td style="padding:6px 0;">${data.company}</td></tr>` : ""}
          ${data.budget ? `<tr><td style="padding:6px 0;font-weight:700;">Budget :</td><td style="padding:6px 0;">${budgetLabels[data.budget] ?? data.budget}</td></tr>` : ""}
          <tr><td style="padding:6px 0;font-weight:700;vertical-align:top;">Projet :</td><td style="padding:6px 0;font-style:italic;">"${data.message}"</td></tr>
        </table>
      </div>

      <!-- Service-specific content -->
      ${isFormation ? formationBlock : integrationBlock}

      <!-- CTA -->
      <div style="text-align:center;margin:32px 0;">
        <a href="https://agence4ia.onrender.com/fr/contact" 
           style="display:inline-block;background:#FFC466;color:#010101;font-weight:800;font-size:15px;padding:14px 32px;border:2px solid #010101;box-shadow:4px 4px 0 #010101;text-decoration:none;">
          📅 Réserver un appel gratuit →
        </a>
      </div>

      <p style="color:#374151;font-size:14px;line-height:1.7;margin:24px 0 0;">
        En attendant, n'hésitez pas à explorer notre site pour en savoir plus sur nos services.
      </p>
      <p style="color:#374151;font-size:15px;margin:16px 0 0;">
        À très bientôt,<br>
        <strong>Aymane & Bachir</strong><br>
        <span style="color:#8e59ff;font-weight:700;">Agence4IA</span>
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#230661;padding:20px 40px;text-align:center;">
      <p style="color:#c4b5fd;font-size:12px;margin:0;">
        © 2026 Agence4IA · <a href="https://agence4ia.onrender.com" style="color:#FFC466;text-decoration:none;">agence4ia.com</a>
      </p>
      <p style="color:#7c3aed;font-size:11px;margin:6px 0 0;">
        Vous recevez cet email car vous avez rempli notre formulaire de contact.
      </p>
    </div>

  </div>
</body>
</html>
  `;
}

function buildInternalEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
}) {
  const serviceLabel = serviceLabels[data.service]?.fr ?? data.service;
  const budgetLabel = data.budget ? budgetLabels[data.budget] : "Non renseigné";

  return `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body style="font-family:Arial,sans-serif;background:#f4ebe2;padding:20px;">
  <div style="max-width:500px;margin:0 auto;background:#fff;border:2px solid #010101;padding:24px;box-shadow:4px 4px 0 #010101;">
    <h2 style="margin:0 0 16px;color:#8e59ff;border-bottom:2px solid #010101;padding-bottom:8px;">🔔 Nouveau lead — Agence4IA</h2>
    <table style="width:100%;font-size:14px;border-collapse:collapse;">
      <tr style="background:#f4ebe2;"><td style="padding:8px;font-weight:700;">Nom</td><td style="padding:8px;">${data.fullName}</td></tr>
      <tr><td style="padding:8px;font-weight:700;">Email</td><td style="padding:8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
      <tr style="background:#f4ebe2;"><td style="padding:8px;font-weight:700;">Téléphone</td><td style="padding:8px;">${data.phone}</td></tr>
      <tr><td style="padding:8px;font-weight:700;">Entreprise</td><td style="padding:8px;">${data.company ?? "—"}</td></tr>
      <tr style="background:#f4ebe2;"><td style="padding:8px;font-weight:700;">Service</td><td style="padding:8px;"><strong>${serviceLabel}</strong></td></tr>
      <tr><td style="padding:8px;font-weight:700;">Budget</td><td style="padding:8px;">${budgetLabel}</td></tr>
      <tr style="background:#f4ebe2;"><td style="padding:8px;font-weight:700;vertical-align:top;">Message</td><td style="padding:8px;font-style:italic;">${data.message}</td></tr>
    </table>
    <div style="margin-top:16px;padding:12px;background:#FFC466;border:2px solid #010101;text-align:center;">
      <a href="mailto:${data.email}" style="font-weight:800;color:#010101;text-decoration:none;">📧 Répondre à ${data.fullName} →</a>
    </div>
  </div>
</body></html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { fullName, email, phone, company, service, message, budget } = data;

    if (!fullName || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const [clientResult, internalResult] = await Promise.all([
      // Email to client
      resend.emails.send({
        from: "Agence4IA <contact@agence4ia.com>",
        to: [email],
        subject: `Merci ${fullName.split(" ")[0]} — Votre demande Agence4IA est bien reçue 🚀`,
        html: buildClientEmail({ fullName, email, phone, company, service, message, budget }),
      }),
      // Notification to team
      resend.emails.send({
        from: "Agence4IA <contact@agence4ia.com>",
        to: ["aymane.abdennour@gmail.com"],
        subject: `🔔 Nouveau lead : ${fullName} — ${service === "learnAI" ? "Formation IA" : "Intégration IA"}`,
        html: buildInternalEmail({ fullName, email, phone, company, service, message, budget }),
      }),
    ]);

    if (clientResult.error || internalResult.error) {
      console.error("Resend error:", clientResult.error || internalResult.error);
      return NextResponse.json({ error: "Email sending failed" }, { status: 500 });
    }

    // Save lead to Supabase CRM
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const { error: dbError } = await supabaseAdmin.from("leads").insert({
        full_name: fullName,
        email,
        phone,
        company: company ?? null,
        service,
        message,
        budget: budget ?? null,
        locale: req.headers.get("accept-language")?.startsWith("en") ? "en" : "fr",
        source: req.headers.get("referer") ?? "website",
        status: "new",
      });
      if (dbError) {
        console.error("Supabase insert error:", dbError.message);
        // Don't fail the request — email was already sent
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
