import Image from "next/image";

type AppShowcaseProps = {
  alt: string;
  variant: "login" | "dashboard";
  className?: string;
  priority?: boolean;
  sizes?: string;
  messageLines?: readonly string[];
};

const weekdayLabels = ["일", "월", "화", "수", "목", "금", "토"] as const;

const calendarRows = [
  ["01", "02", "03", "04", "05", "06", "07"],
  ["08", "09", "10", "11", "12", "13", "14"],
  ["15", "16", "17", "18", "19", "20", "21"],
  ["22", "23", "24", "25", "26", "27", "28"],
  ["29", "30", "31", "01", "02", "03", "04"],
  ["05", "06", "07", "08", "09", "10", "11"],
] as const;

function ShowcaseIcon({ kind }: { kind: "journal" | "report" }) {
  return (
    <div
      aria-hidden="true"
      className="relative grid aspect-square w-full place-items-center rounded-[1.5rem] border border-[#e7c5aa] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(251,241,230,0.96))] shadow-[0_16px_34px_rgba(169,120,81,0.18),inset_0_1px_0_rgba(255,255,255,0.92)]"
    >
      <div className="absolute inset-[7%] rounded-[1.2rem] border border-[#f3dbc8] bg-white/75" />

      {kind === "journal" ? (
        <div className="relative h-[52%] w-[52%] rotate-[-7deg]">
          <div className="absolute left-[18%] top-[16%] h-[68%] w-[50%] rounded-[0.45rem] border border-[#d8af90] bg-[#fffaf4] shadow-[0_6px_14px_rgba(168,117,79,0.12)]" />
          <div className="absolute left-[24%] top-[9%] flex gap-[8%]">
            {Array.from({ length: 4 }).map((_, index) => (
              <span key={index} className="h-[0.5rem] w-[0.12rem] rounded-full bg-[#be8b68]" />
            ))}
          </div>
          <div className="absolute left-[26%] top-[32%] flex flex-col gap-[12%]">
            {Array.from({ length: 3 }).map((_, index) => (
              <span key={index} className="h-[0.12rem] w-[0.95rem] rounded-full bg-[#e7c6ac]" />
            ))}
          </div>
          <div className="absolute left-[61%] top-[26%] h-[52%] w-[0.24rem] rotate-[28deg] rounded-full bg-[#e2a07a]" />
          <div className="absolute left-[58%] top-[60%] h-[0.3rem] w-[1.25rem] rotate-[28deg] rounded-full bg-[#f0c09e]" />
          <div className="absolute left-[66%] top-[22%] h-[0.42rem] w-[0.42rem] rotate-[28deg] rounded-[0.08rem] bg-[#ffd8bf]" />
        </div>
      ) : (
        <div className="relative h-[50%] w-[52%]">
          <div className="absolute bottom-[10%] left-[10%] right-[10%] h-[0.12rem] rounded-full bg-[#d9a884]" />
          <span className="absolute bottom-[14%] left-[18%] h-[28%] w-[14%] rounded-[0.22rem] bg-[#efc199]" />
          <span className="absolute bottom-[14%] left-[38%] h-[46%] w-[14%] rounded-[0.22rem] bg-[#ecb78c]" />
          <span className="absolute bottom-[14%] left-[58%] h-[64%] w-[14%] rounded-[0.22rem] bg-[#e7aa78]" />
          <span className="absolute bottom-[14%] left-[78%] h-[82%] w-[14%] rounded-[0.22rem] bg-[#df9b65]" />
        </div>
      )}
    </div>
  );
}

function CalendarBoard({ messageLines }: { messageLines: readonly string[] }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute left-[2.5%] right-[2.5%] top-[3.8%] h-[35%] rounded-[2rem] border border-[#d8b45a] bg-[linear-gradient(180deg,rgba(255,251,239,0.98),rgba(255,247,232,0.96))] px-[4.5%] pb-[4%] pt-[3.6%] shadow-[0_26px_54px_rgba(172,125,77,0.15)]"
      >
        <div className="flex items-center justify-between text-[#d2ac48]">
          <div className="flex gap-[0.25rem]">
            {Array.from({ length: 7 }).map((_, index) => (
              <span
                key={`left-${index}`}
                className="h-[0.95rem] w-[0.42rem] rounded-full border border-[#d6b258] bg-[#fff3bf]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
              />
            ))}
          </div>
          <div className="flex gap-[0.25rem]">
            {Array.from({ length: 7 }).map((_, index) => (
              <span
                key={`right-${index}`}
                className="h-[0.95rem] w-[0.42rem] rounded-full border border-[#d6b258] bg-[#fff3bf]/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
              />
            ))}
          </div>
        </div>

        <div className="mt-[2.5%] flex items-center justify-center gap-[0.6rem] text-[#a36d44]">
          <span className="grid h-[1.05rem] w-[1.05rem] place-items-center rounded-full bg-[#ffe548] text-[0.56rem] font-bold text-[#9b6f17] shadow-[0_3px_10px_rgba(255,215,71,0.38)]">
            {"<"}
          </span>
          <p className="text-[clamp(0.72rem,1.65vw,1rem)] font-semibold tracking-[0.02em]">2026년 03월</p>
          <span className="grid h-[1.05rem] w-[1.05rem] place-items-center rounded-full bg-[#ffe548] text-[0.56rem] font-bold text-[#9b6f17] shadow-[0_3px_10px_rgba(255,215,71,0.38)]">
            {">"}
          </span>
        </div>

        <div className="mt-[3%] overflow-hidden rounded-[1rem] border border-[#f0d6aa] bg-white/68 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
          <div className="grid grid-cols-7 border-b border-[#f1ddb9] bg-[#fdf5eb] text-[clamp(0.36rem,1vw,0.65rem)] font-medium text-[#bf8752]">
            {weekdayLabels.map((label) => (
              <span key={label} className="px-[8%] py-[7%] text-left">
                {label}
              </span>
            ))}
          </div>

          {calendarRows.map((row, rowIndex) => (
            <div key={`row-${rowIndex}`} className="grid grid-cols-7">
              {row.map((value, cellIndex) => {
                const isHighlighted = rowIndex === 1 && cellIndex === 5;

                return (
                  <span
                    key={`${rowIndex}-${cellIndex}`}
                    className={`border-r border-t border-[#f1ddb9] px-[8%] py-[12%] text-left text-[clamp(0.5rem,1.2vw,0.78rem)] leading-none ${
                      cellIndex === row.length - 1 ? "border-r-0" : ""
                    } ${isHighlighted ? "bg-[#a9dedb] text-[#7d7651]" : "text-[#bf8752]"}`}
                  >
                    {value}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div aria-hidden="true" className="absolute left-[14%] top-[45.5%] w-[26%]">
        <ShowcaseIcon kind="journal" />
      </div>

      <div aria-hidden="true" className="absolute right-[14%] top-[45.5%] w-[26%]">
        <ShowcaseIcon kind="report" />
      </div>

      <div
        aria-hidden="true"
        className="absolute left-[31%] top-[58.5%] w-[48%] rounded-[1.7rem] border border-[#d4b095] bg-[#efd0a9]/96 px-[4.6%] py-[4.2%] text-[clamp(0.64rem,1.45vw,0.96rem)] leading-[1.75] text-[#342a20] shadow-[0_18px_40px_rgba(161,114,77,0.16)]"
      >
        {messageLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <span className="absolute bottom-[-0.8rem] left-[18%] block h-[1.6rem] w-[1.6rem] rotate-45 rounded-[0.3rem] border-b border-r border-[#d4b095] bg-[#efd0a9]/96" />
      </div>
    </>
  );
}

function LoginOverlay() {
  return (
    <div
      aria-hidden="true"
      className="absolute left-[10%] right-[10%] top-[31%] h-[40%] rounded-[2rem] border border-white/45 bg-[linear-gradient(180deg,rgba(252,247,241,0.98),rgba(249,241,231,0.92))] shadow-[0_22px_46px_rgba(168,120,81,0.12)] backdrop-blur-[3px]"
    >
      <span className="absolute left-[7%] right-[7%] top-[12%] flex h-[22%] items-center rounded-[1rem] border border-[#d5b49c] bg-[#fffaf4]/98 px-[4%] text-[clamp(0.72rem,1.8vw,1.02rem)] font-medium tracking-[0.01em] text-[#3a2d23]">
        ID
      </span>
      <span className="absolute left-[7%] top-[42%] flex h-[18%] w-[66%] items-center rounded-[1rem] border border-[#d5b49c] bg-[#fffaf4]/98 px-[4%] text-[clamp(0.68rem,1.65vw,0.96rem)] font-medium tracking-[0.01em] text-[#3a2d23]">
        PASSWORD
      </span>
      <span className="absolute right-[7%] top-[42%] grid h-[18%] w-[24%] place-items-center rounded-[1rem] border border-[#d7b089] bg-[#f0d1a8]/98 text-[clamp(0.68rem,1.55vw,0.95rem)] font-semibold text-[#342a20] shadow-[0_12px_28px_rgba(169,120,81,0.12)]">
        Login
      </span>
      <span className="absolute bottom-[8%] right-[7.5%] grid h-[16%] w-[23%] place-items-center rounded-[0.85rem] border border-[#d7b089] bg-[#f6dfbf]/98 text-[clamp(0.54rem,1.25vw,0.76rem)] font-medium text-[#3d3227] shadow-[0_8px_20px_rgba(169,120,81,0.1)]">
        회원가입
      </span>
    </div>
  );
}

function DashboardOverlay({ messageLines }: { messageLines: readonly string[] }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-x-[1.8%] top-[2%] h-[67%] rounded-[2.2rem] bg-[linear-gradient(180deg,rgba(252,248,242,0.92),rgba(248,240,229,0.4))]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,rgba(255,247,234,0),rgba(255,244,232,0.22)_42%,rgba(255,241,225,0.7))]"
      />
      <CalendarBoard messageLines={messageLines} />
    </>
  );
}

export function AppShowcase({
  alt,
  variant,
  className = "",
  priority = false,
  sizes = "100vw",
  messageLines = ["오늘의 일기가", "작성되지 않았어요"],
}: AppShowcaseProps) {
  const backgroundImage = variant === "login" ? "/images/app-runtime.webp" : "/images/app-home.webp";

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative isolate overflow-hidden rounded-[1.8rem] bg-[#fbf5ed] ${className}`.trim()}
    >
      <Image
        src={backgroundImage}
        alt=""
        aria-hidden
        fill
        priority={priority}
        sizes={sizes}
        className={`${
          variant === "login" ? "object-cover object-top opacity-[0.96]" : "object-cover object-[center_16%] opacity-[0.62] scale-[1.02]"
        }`}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.52),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(250,239,225,0.34),transparent_42%),linear-gradient(180deg,rgba(255,250,244,0.06),rgba(255,247,238,0.24))]"
      />
      {variant === "login" ? <LoginOverlay /> : <DashboardOverlay messageLines={messageLines} />}
    </div>
  );
}
