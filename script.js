
const books = [
  {
    title: "Differential and Integral Calculus",
    author: "Clyde E. Love",
    year: "1st Year",
    subject: "Calculus",
    category: "Mathematics",
    cover: "covers/calculus.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1-dFoftBBFXJLfu15A0Aq77-L7VqZUpr8/view?usp=sharing"
  },
  {
    title: "College Algebra",
    author: "Paul R. Rider",
    year: "1st Year",
    subject: "Algebra",
    category: "Mathematics",
    cover: "covers/college algebra.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1kshCS6L48kml8DdNuHzuAtv_kPILOBzw/view?usp=sharing"
  },
  {
    title: "Materials Science and Engineering",
    author: "D. Callister",
    year: "1st Year",
    subject: "Materials Science and Engineering",
    category: "GEAS",
    cover: "covers/materialscience.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1H3K8U-n8LpdiwYGcDbANCX6L6XeCwZtS/view?usp=sharing"
  },
  {
    title: "University Physics",
    author: "Young & Freedman",
    year: "1st Year",
    subject: "Physics",
    category: "GEAS",
    cover: "covers/uphysics.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1w_zAWADpGEGRGA8Ow56fA-1D-Ojrm9s7/view?usp=sharing"
  },
  {
    title: "Thermodynamics",
    author: "Hipolito sta Maria",
    year: "1st Year",
    subject: "Physics 2",
    category: "GEAS",
    cover: "covers/phys2.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1qDOPQlhlbM6in_TlL81WTJfRUXlMpsrt/view?usp=sharing"
  },
  {
    title: "Chemistry for Engineers",
    author: "Reviewer",
    year: "1st Year",
    subject: "Chemistry",
    category: "GEAS",
    cover: "covers/chemist.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1qDOPQlhlbM6in_TlL81WTJfRUXlMpsrt/view?usp=sharing"
  },
  {
    title: "Electronics Devices and Circuit Theory",
    author: "Boylestad",
    year: "2nd Year",
    subject: "Electronics 1, 2, 3",
    category: "Electronics",
    cover: "covers/elects.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1YrrdwbsWeYmSDP9bByLxgaPrulWzl_yd/view?usp=sharing"
  },
  {
    title: "Basic Electronics",
    author: "Schultz",
    year: "2nd Year",
    subject: "Electronics",
    category: "Electronics",
    cover: "covers/basic.jpg",
    driveUrl:
      "https://drive.google.com/file/d/14xg5JvtnLBMVa_sb0NokpSIuCxPYffNj/view?usp=sharing"
  },

  {
    title: "Engineering Circuit Analysis",
    author: "Hayt 8th Edition",
    year: "2nd Year",
    subject: "circuits",
    category: "Electronics",
    cover: "covers/circ.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1pB2V6ZJm5yBbScI-I3HVboubHBm3paq_/view?usp=sharing"
  },

  {
    title: "Engineering Circuit Analysis",
    author: "Hayt 7th Edition",
    year: "2nd Year",
    subject: "circuits",
    category: "Electronics",
    cover: "covers/cir.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1XSjoQp1zlXvHHNOvgQxbzW2q5xoAb1rj/view?usp=sharing"
  },

  {
    title: "Fundamentals of Electric Circuit",
    author: "Sadiku 5th Edition",
    year: "2nd Year",
    subject: "circuits",
    category: "Electronics",
    cover: "covers/sad.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1aQ8R21jEVhzWVazDa7fBVgqS7drhebhW/view?usp=sharing"
  },
  {
    title: "Principle of Electronics",
    author: "Mehta",
    year: "2nd Year",
    subject: "circuits",
    category: "Electronics",
    cover: "covers/pri.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1c65ctgPU-yFo38WUqvRSZN8EcLbSV-ne/view?usp=sharing"
  },

  {
    title: "Advance Mathematics",
    author: "James",
    year: "2nd Year",
    subject: "Ad Math",
    category: "Mathematics",
    cover: "covers/admat.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1dX84p-Zgbud_MiLd9LE9skxCWV2Ije4r/view?usp=sharing"
  },

  {
    title: "Advance Mathematics",
    author: "Jeffrey",
    year: "2nd Year",
    subject: "Ad Math",
    category: "Mathematics",
    cover: "covers/adm.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1rATXHO_wXywWuMQdL3gqS3g4FTjOEaKc/view?usp=sharing"
  },

  {
    title: "Differential Equation",
    author: "Kreysig 9th Edition",
    year: "2nd Year",
    subject: "DE",
    category: "Mathematics",
    cover: "covers/de1.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1nCbY_XjJADhSgApI9DUb16lWeba-WIz3/view?usp=sharing"
  },

  {
    title: "Differential Equation",
    author: "Kreysig 10th Edition",
    year: "2nd Year",
    subject: "DE",
    category: "Mathematics",
    cover: "covers/de.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1cLLhcW7xEMf-SfdKS5F37ZtCjHB1DF0u/view?usp=sharing"
  },

  {
    title: "Differential Equation",
    author: "O'Neil",
    year: "2nd Year",
    subject: "DE",
    category: "Mathematics",
    cover: "covers/d.jpg",
    driveUrl:
      "https://drive.google.com/file/d/17oCWyOmgeerGjMo4JWYb_qLFjE8FAct9/view?usp=sharing"
  },

  {
    title: "Environmental Science",
    author: "Vesilind",
    year: "2nd Year",
    subject: "Environmental Science",
    category: "GEAS",
    cover: "covers/env.jpg",
    driveUrl:
      "https://drive.google.com/file/d/15vaAkB3ZQyi52BYCGPW35W64t8NwFkMn/view?usp=sharing"
  },

  {
    title: "Electronic Communication System",
    author: "Blake",
    year: "2nd Year",
    subject: "Electronic Communication",
    category: "EST",
    cover: "covers/es.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1wAh3-Zdu-eT4JQw4-tQwLhUmcB1jHqjX/view?usp=sharing"
  },

  {
    title: "Principle of Electronic Communication System",
    author: "Frenzel",
    year: "2nd Year",
    subject: "Electronic Communication",
    category: "EST",
    cover: "covers/c.jpg",
    driveUrl:
      "https://drive.google.com/file/d/15jRbWKAGDPgEStFqWPOanwjRwOVGmTNQ/view?usp=sharing"
  },

  {
    title: "Differential Equation",
    author: "Rainville",
    year: "2nd Year",
    subject: "Diffirential Equation",
    category: "Mathematics",
    cover: "covers/elem.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1tCeGyvC9A3gBHfo1t42dMjqRJhRnhwY7/view?usp=sharing"
  },

  {
    title: "Digital design",
    author: "Manna",
    year: "3rd Year",
    subject: "Logic and Design",
    category: "EST",
    cover: "covers/log.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1q1Fn-inWad9UhTu1EM7E9C3CoRiLHnIY/view?usp=sharing"
  },

  {
    title: "Control System",
    author: "Nise",
    year: "3rd Year",
    subject: "Control System",
    category: "Mathematics",
    cover: "covers/cont.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1tCeGyvC9A3gBHfo1t42dMjqRJhRnhwY7/view?usp=sharing"
  },

  {
    title: "Data Communication and Networking",
    author: "Forouzan",
    year: "3rd Year",
    subject: "Data Communication",
    category: "EST",
    cover: "covers/dat.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1PKNi1NofM8aNZNOFw9ebAjy9Us3vbkKM/view?usp=sharing"
  },

  {
    title: "Engineering Economy",
    author: "Sullivan",
    year: "2nd Year",
    subject: "ECON",
    category: "Mathematics",
    cover: "covers/ec.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1eBicj-KkDMG5yBopSqGM2thAIlP9DHLI/view?usp=sharing"
  },

  {
    title: "Modulation",
    author: "Merge",
    year: "3rd Year",
    subject: "Modulation",
    category: "EST",
    cover: "covers/mod.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1vR6PsLkm0JkifMTsNbWgE3TEP9KuOypn/view?usp=sharing"
  },

  {
    title: "Communication Electronics",
    author: "Frenzel",
    year: "3rd Year",
    subject: "Communication",
    category: "EST",
    cover: "covers/coms.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1NEImLmtciefnj1INzGZEkHQElzOv81rt/view?usp=sharing"
  },

  {
    title: "Engineering Economy",
    author: "Blank",
    year: "2nd Year",
    subject: "ECON",
    category: "Mathematics",
    cover: "covers/nom.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1nt4xM4fAwTaNjwvKCLJGuhYg6Shg3h-h/view?usp=sharing"
  },

  {
    title: "Engineering Economy",
    author: "STA. Maria",
    year: "2nd Year",
    subject: "ECON",
    category: "Mathematics",
    cover: "covers/nocs.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1TPbhRTT0_-iqdwTEJw4JvC3WfOA91i7j/view?usp=sharing"
  },
  {
    title: "ECE Laws",
    author: "Handouts",
    year: "3rd Year",
    subject: "Laws",
    category: "GEAS",
    cover: "covers/law.jpg",
    driveUrl:
      "https://drive.google.com/drive/folders/19EGNXRHS9SUW-1N64QXGfuT1GqtRXTcM?usp=sharing"
  },

  {
    title: "Digital Processing",
    author: "Tan",
    year: "3rd Year",
    subject: "Communication",
    category: "EST",
    cover: "covers/dug.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1OcxW9ns1ORqgfxmO0-ZYETSPlLnQvCeX/view?usp=sharing"
  },

  {
    title: "Signals and Systems",
    author: "Hesu",
    year: "3rd Year",
    subject: "Signals",
    category: "EST",
    cover: "covers/sig.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1loWy50M9eyUWnew6viQvfBB5RBbbh38e/view?usp=sharing"
  },

  {
    title: "Electromagnitism",
    author: "Buck",
    year: "4th Year",
    subject: "Electromag",
    category: "Mathematics and Electronics",
    cover: "covers/emag.jpg",
    driveUrl:
      "https://drive.google.com/file/d/1bvQvEzTdsqC3R1OS6nZBTJaFmttRFLWz/view?usp=sharing"
  },


];

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");
const categoryList = document.getElementById("categoryList");
const bookGrid = document.getElementById("bookGrid");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const resetButton = document.getElementById("resetButton");

let selectedYear = "All";
let searchTerm = "";

const icons = {
  pdf: `
    <svg class="button-icon" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <path d="M14 2v6h6"/>
      <path d="M8 13h8M8 17h8"/>
    </svg>`,
  read: `
    <svg class="button-icon" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="1.8"
      stroke-linecap="round" stroke-linejoin="round"
      aria-hidden="true">
      <path d="M2 4h8a2 2 0 0 1 2 2v15H5a3 3 0 0 0-3 1z"/>
      <path d="M22 4h-8a2 2 0 0 0-2 2v15h7a3 3 0 0 1 3 1z"/>
    </svg>`,
  drive: `
    <svg class="button-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#00875A" d="M8.1 15.2 4.8 21h12.1l3.3-5.8z"/>
      <path fill="#4285F4" d="M16.9 15.2 13.6 21h3.3l3.3-5.8z"/>
      <path fill="#FFBA00" d="M8.1 3 1 15.2l3.8 5.8 7.1-12.2z"/>
      <path fill="#2684FC" d="M8.1 3h6.7l7.1 12.2h-6.7z"/>
      <path fill="#00AC47" d="M4.8 21h12.1l-3.3-5.8H8.1z"/>
    </svg>`
};

function getDriveFileId(url) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? match[1] : null;
}

function getDrivePreviewUrl(url) {
  const id = getDriveFileId(url);
  return id
    ? `https://drive.google.com/file/d/${id}/preview`
    : url;
}

function getDriveDownloadUrl(url) {
  const id = getDriveFileId(url);
  return id
    ? `https://drive.google.com/uc?export=download&id=${id}`
    : url;
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    return entities[character];
  });
}

function createBookCard(book) {
  const title = escapeHTML(book.title);
  const author = escapeHTML(book.author);
  const year = escapeHTML(book.year);
  const subject = escapeHTML(book.subject);
  const category = escapeHTML(book.category);
  const cover = escapeHTML(book.cover);
  const driveUrl = escapeHTML(book.driveUrl);
  const previewUrl = escapeHTML(getDrivePreviewUrl(book.driveUrl));
  const downloadUrl = escapeHTML(getDriveDownloadUrl(book.driveUrl));

  return `
    <article class="book-card">
      <div class="book-cover-wrap">
        <img
          class="book-cover"
          src="${cover}"
          alt="Cover of ${title}"
          loading="lazy"
          onerror="this.style.display='none'; this.nextElementSibling.hidden=false;"
        >
        <div class="cover-placeholder" hidden>${title}</div>
      </div>

      <div class="book-info">
        <div class="book-tags">
          <span class="book-tag">${year}</span>
          <span class="book-tag">${category}</span>
        </div>

        <h3 class="book-title">${title}</h3>
        <p class="book-author">By ${author}</p>
        <p class="book-subject">Subject: ${subject}</p>

        <div class="book-actions">
          <a class="book-action primary"
             href="${downloadUrl}"
             target="_blank"
             rel="noopener noreferrer">
            ${icons.pdf}
            <span>Download PDF</span>
          </a>

          <a class="book-action"
             href="${previewUrl}"
             target="_blank"
             rel="noopener noreferrer">
            ${icons.read}
            <span>Read PDF</span>
          </a>

          <a class="book-action"
             href="${driveUrl}"
             target="_blank"
             rel="noopener noreferrer">
            ${icons.drive}
            <span>Open in Google Drive</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

function renderBooks() {
  const filteredBooks = books.filter(book => {
    const matchesYear =
      selectedYear === "All" || book.year === selectedYear;

    const searchableText = [
      book.title,
      book.author,
      book.year,
      book.subject,
      book.category
    ].join(" ").toLowerCase();

    return matchesYear && searchableText.includes(searchTerm);
  });

  bookGrid.innerHTML = filteredBooks.map(createBookCard).join("");

  resultCount.textContent =
    `${filteredBooks.length} ${filteredBooks.length === 1 ? "book" : "books"} found`;

  emptyState.hidden = filteredBooks.length !== 0;
  bookGrid.hidden = filteredBooks.length === 0;
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchTerm = searchInput.value.trim().toLowerCase();
  renderBooks();
});

searchInput.addEventListener("input", () => {
  searchTerm = searchInput.value.trim().toLowerCase();
  renderBooks();
});

categoryList.addEventListener("click", event => {
  const button = event.target.closest("[data-year]");
  if (!button) return;

  selectedYear = button.dataset.year;

  categoryList.querySelectorAll("[data-year]").forEach(item => {
    const active = item === button;
    item.classList.toggle("active", active);
    item.setAttribute("aria-pressed", String(active));
  });

  renderBooks();
});

resetButton.addEventListener("click", () => {
  selectedYear = "All";
  searchTerm = "";
  searchInput.value = "";

  categoryList.querySelectorAll("[data-year]").forEach(button => {
    const active = button.dataset.year === "All";
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderBooks();
});

categoryList.querySelectorAll("[data-year]").forEach(button => {
  button.setAttribute(
    "aria-pressed",
    String(button.dataset.year === "All")
  );
});

renderBooks();
