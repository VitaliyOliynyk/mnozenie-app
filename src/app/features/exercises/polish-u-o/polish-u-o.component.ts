import { ChangeDetectionStrategy, Component, signal, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackBannerComponent } from '../../../ui/common/components/feedback-banner/feedback-banner.component';
import { StatsComponent } from '../../../ui/components/stats/stats.component';
import { POLISH_UO_WORDS, PolishWord } from './polish-u-o.words';
import { Stats } from '../../../core/models/stats';

@Component({
    selector: 'app-polish-u-o',
    standalone: true,
    imports: [
        CommonModule,
        FeedbackBannerComponent,
        StatsComponent
    ],
    templateUrl: './polish-u-o.component.html',
    styleUrl: './polish-u-o.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PolishUOComponent {
    // Game state
    readonly currentWord = signal<PolishWord | null>(null);
    readonly feedbackState = signal<'idle' | 'result'>('idle');
    readonly lastResult = signal<boolean | null>(null);

    // Stats
    readonly correctCount = signal(0);
    readonly wrongCount = signal(0);

    readonly stats = computed<Stats>(() => {
        const correct = this.correctCount();
        const wrong = this.wrongCount();
        const total = correct + wrong;
        const rate = total === 0 ? 0 : Math.round((correct / total) * 100);

        return {
            total: () => total,
            correct: () => correct,
            rate: () => rate
        };
    });

    constructor() {
        this.nextWord();

        // Auto-advance effect
        effect(() => {
            const result = this.lastResult();
            if (result !== null) {
                this.feedbackState.set('result');
                setTimeout(() => {
                    this.feedbackState.set('idle');
                    this.lastResult.set(null);
                    this.nextWord();
                }, 1500); // 1.5s delay for feedback
            }
        }, { allowSignalWrites: true });
    }

    selectAnswer(letter: 'u' | 'ó'): void {
        const word = this.currentWord();
        if (!word || this.feedbackState() !== 'idle') return;

        const isCorrect = word.correctLetter === letter;

        if (isCorrect) {
            this.correctCount.update(v => v + 1);
            this.lastResult.set(true);
        } else {
            this.wrongCount.update(v => v + 1);
            this.lastResult.set(false);
        }
    }

    nextWord(): void {
        const randomIndex = Math.floor(Math.random() * POLISH_UO_WORDS.length);
        this.currentWord.set(POLISH_UO_WORDS[randomIndex]);
    }

    resetStats(): void {
        this.correctCount.set(0);
        this.wrongCount.set(0);
        this.nextWord();
    }

    private calculateAccuracy(): number {
        const total = this.correctCount() + this.wrongCount();
        if (total === 0) return 0;
        return Math.round((this.correctCount() / total) * 100);
    }
}
